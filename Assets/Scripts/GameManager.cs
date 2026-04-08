using UnityEngine;
using UnityEngine.UI;
using Project.Gameplay;
using DG.Tweening;
using System.Collections;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance;

    // ===== CHARACTERS =====
    [Header("Characters - Kéo CharacterAnimationLibrary vào đây")]
    public CharacterAnimationLibrary newton;   // Newton (1)
    public CharacterAnimationLibrary girl;     // Rumi (1)
    public CharacterAnimationLibrary guy;      // Hero (1)
    public CharacterAnimationLibrary dog;      // Dog (1) - con của Tree

    // ===== OBJECTS TRONG SCENE =====
    [Header("Scene Objects")]
    public GameObject treeNormal;       // Tree (cây bình thường)
    public GameObject treeCutTrunk;     // TreeCut_Trunk (gốc cây sau khi cưa)
    public GameObject treeCutBranch;    // TreeCut_Branch (cành cây rơi)
    public GameObject ladderInScene;    // Ladder_open (thang mở ra khi thắng)
    public GameObject[]  normalApples;     // App_Correct (quả táo đúng)
    public GameObject[] cutApples;

    // ===== ITEMS TRONG TRAY =====
    [Header("Draggable Items - Để reset vị trí")]
    public DraggableItem itemLadder;
    public DraggableItem itemSwatter;
    public DraggableItem itemBucket;
    public DraggableItem itemSaw;
    public DraggableItem itemDumbbell;

    // ===== UI =====
    [Header("UI Dialogue")]
    public GameObject dialogueBox;      
    public Text dialogueText;           
    public Image dialogueImage;         

    // ===== TRẠNG THÁI GAME =====
    private bool _isProcessing = false; // Ngăn spam kéo thả liên tục
    private bool _isGameWon = false;

    // =========================================================
    // KHỞI TẠO
    // =========================================================
    private void Awake()
    {
        Instance = this;
    }

    private void Start()
    {
        // Trạng thái ban đầu
        if (newton != null) newton.Play("Idle");
        if (girl != null) girl.Play("Idle");
        if (guy != null) guy.Play("Idle");
        if (dog != null) dog.Play("Idle");

        // Ẩn các object chưa cần
        if (ladderInScene != null) ladderInScene.SetActive(false);
        if (treeCutTrunk != null) treeCutTrunk.SetActive(false);
        if (dialogueBox != null) dialogueBox.SetActive(false);
    }

    // =========================================================
    // HÀM CHÍNH - Được gọi từ DropZone.OnDrop()
    // =========================================================
    public void ProcessInteraction(string itemID, string zoneID)
    {
        if (_isProcessing || _isGameWon) return;
        _isProcessing = true;

        Debug.Log($"[GameManager] Processing: {itemID} -> {zoneID}");

        // ===== ĐÚNG: Thang + Chàng trai = THẮNG =====
        if (itemID == "Ladder" && zoneID == "Boy")
        {
            StartCoroutine(ExecuteWin());
        }
        // ===== SAI: Cưa + Cành cây =====
        else if (itemID == "Saw" && zoneID == "TreeBranch")
        {
            StartCoroutine(ExecuteSawTree());
        }
        // ===== SAI: Vợt muỗi + Cô gái =====
        else if (itemID == "Swatter" && zoneID == "Girl")
        {
            StartCoroutine(ExecuteSwatter());
        }
        // ===== SAI: Thùng sơn + Cô gái =====
        else if (itemID == "Bucket" && zoneID == "Girl")
        {
            StartCoroutine(ExecuteBucket());
        }
        // ===== SAI: Tạ + Chàng trai =====
        else if (itemID == "Dumbbell" && zoneID == "Boy")
        {
            StartCoroutine(ExecuteDumbbell());
        }
        // ===== Kéo nhầm chỗ =====
        else
        {
            ShowDialogue("That doesn't work here...");
            DOVirtual.DelayedCall(1.5f, () => {
                HideDialogue();
                _isProcessing = false;
            });
        }
    }

    // =========================================================
    // Được gọi từ AppleClick.OnPointerClick()
    // =========================================================
    public void OnAppleClicked()
    {
        if (_isProcessing || _isGameWon) return;
        _isProcessing = true;
        StartCoroutine(ExecuteAppleFall());
        }

    // =========================================================
    // CÁC KỊCH BẢN TƯƠNG TÁC
    // =========================================================

    // --- THẮNG: Kéo thang vào chàng trai ---
    private IEnumerator ExecuteWin()
    {
        _isGameWon = true;
        Debug.Log("[GameManager] === WIN ===");

        // Hiện cái thang trong scene
        // if (ladderInScene != null) ladderInScene.SetActive(true);

        // Chàng trai leo thang (chạy anim)
        if (guy != null) guy.Play("Win", false);

    yield return new WaitForSeconds(1f);

        // Chó vui mừng
        if (dog != null) dog.Play("Win");

        // Newton khen
        if (newton != null) newton.Play("Win");

        ShowDialogue("Your IQ is truly impressive!");

        yield return new WaitForSeconds(2f);

        // TODO: Hiện Win Panel hoặc gọi Luna.Unity.Playable.InstallFullGame()
        Debug.Log("[GameManager] Show Win Panel here");
    }

    private IEnumerator ExecuteSawTree()
    {
        SyncApples();
        if (treeNormal != null) treeNormal.SetActive(false);
        if (treeCutTrunk != null) treeCutTrunk.SetActive(true);

        if (treeCutBranch != null)
        {
            treeCutBranch.SetActive(true);
            RectTransform branchRect = treeCutBranch.GetComponent<RectTransform>();
            if (branchRect != null)
            {
                branchRect.DOShakePosition(0.3f, 20f, 15);
                yield return new WaitForSeconds(0.3f);
                branchRect.DOAnchorPosY(branchRect.anchoredPosition.y - 300f, 0.8f)
                    .SetEase(Ease.InQuad);
            }
        }

        yield return new WaitForSeconds(0.5f);

        // Newton tức giận
        if (newton != null) newton.Play("Angry_Saw");
        ShowDialogue("No! The puppy fell down!");

        yield return new WaitForSeconds(2.5f);
        if (newton != null) newton.Play("Idle");
        _isProcessing = false;
        // Reset lại
        //ResetAfterFail();
    }

    // --- SAI: Vợt muỗi + Cô gái ---
    private IEnumerator ExecuteSwatter()
    {
        Transform girlTrans = girl.transform;
        Vector3 girlOriginalPos = girlTrans.localPosition;
        if (girl != null) 
        {
            girl.Play("Hit", false);
            
            girlTrans.localPosition += new Vector3(80f, 30f, 0); 
        }
        yield return new WaitForSeconds(1.5f);
        
        if(dog != null) dog.Play("Shock");
        
        if (newton != null) newton.Play("Angry_Swatter", false);
        ShowDialogue("You really think a mosquito swatter can help?");
        yield return new WaitForSeconds(2.5f);
        if (girlTrans != null) girlTrans.localPosition = girlOriginalPos;
        ResetAfterFail();
    }
    private IEnumerator ExecuteBucket()
    {
        // Kiểm tra xem hàm có chạy vào đây không
        Debug.Log("[GameManager] Đang bắt đầu ExecuteBucket");

        if (girl != null) 
        {
            Transform girlTrans = girl.transform;
            Vector3 originalPos = girlTrans.localPosition;
            Vector3 originalScale = girlTrans.localScale;

            // Log ra tọa độ cũ để đối chiếu
            Debug.Log("Vị trí cũ: " + originalPos + " | Scale cũ: " + originalScale);

            // Ép thông số mới
            girlTrans.localPosition = new Vector3(-274f, -74f, originalPos.z);
            girlTrans.localScale = new Vector3(171.1f, 171.1f, 1f);

            // Log ra để xác nhận Transform đã thay đổi trong code
            Debug.Log("Vị trí mới: " + girlTrans.localPosition);
            
            girl.Play("Bucket", false);

            yield return new WaitForSeconds(0.5f);

            if (newton != null) newton.Play("Angry_Bucket", false);
            ShowDialogue("That's not how you use paint!");

            yield return new WaitForSeconds(3.5f);

            // Reset lại
            girlTrans.localPosition = originalPos;
            girlTrans.localScale = originalScale;
            Debug.Log("Đã Reset vị trí cô gái");
        }
        else 
        {
            Debug.LogError("Biến 'girl' chưa được gán trong Inspector của GameManager!");
        }

        ResetAfterFail();
    }



    private IEnumerator ExecuteDumbbell()
    {
        if (guy != null) guy.Play("Gym", false);

        yield return new WaitForSeconds(0.5f);

        if (newton != null) newton.Play("Angry_Gym");
        ShowDialogue("Dumbbells won't save the puppy!");

        yield return new WaitForSeconds(2.5f);

        ResetAfterFail();
    }

    // --- Quả táo rơi trúng Newton ---
    private IEnumerator ExecuteAppleFall()
    {
        Debug.Log("[GameManager] Apple falls on Newton!");

        if (normalApples != null && normalApples.Length > 0)
        {
            GameObject appleToFall = normalApples[0]; // Số 0 là quả táo đầu tiên
            RectTransform appleRect = appleToFall.GetComponent<RectTransform>();
            if (appleRect != null)
            {

                appleRect.DOShakePosition(0.5f, 10f, 10);
                yield return new WaitForSeconds(0.5f);


                float hitY = appleRect.anchoredPosition.y - 600f; 
                appleRect.DOAnchorPos(new Vector2(appleRect.anchoredPosition.x + 10f, hitY), 0.4f)
                    .SetEase(Ease.InQuad);

                yield return new WaitForSeconds(0.4f);

                // Newton phản ứng bị trúng táo
                if (newton != null) newton.Play("AppleHit", false);
                ShowDialogue("Ouch! An apple hit me!");

                // 3. GIAI ĐOẠN 2: Văng ra và rơi xuống đất
                // Quả táo sẽ nảy sang phải thêm một chút và rơi sâu xuống dưới
                appleRect.DOAnchorPos(new Vector2(appleRect.anchoredPosition.x - 100f, hitY - 200f), 1f)
                    .SetEase(Ease.OutBounce); // Hiệu ứng nảy khi chạm đất
                
                // Xoay quả táo một chút cho tự nhiên
                appleRect.DORotate(new Vector3(0, 0, 180), 0.6f);
                yield return new WaitForSeconds(1f);
                appleToFall.SetActive(false);
            }
        }

        yield return new WaitForSeconds(4.5f);
        ResetAfterFail();
    }

    private void SyncApples()
    {
        if (normalApples == null || cutApples == null) return;
        
        // Duyệt qua tất cả các quả táo
        for (int i = 0; i < normalApples.Length; i++)
        {
            // Nếu quả táo trên cây chính đã bị hái (không còn Active)
            if (normalApples[i] != null && !normalApples[i].activeSelf)
            {
                // Thì tắt quả táo tương ứng bên cành cây bị chặt
                if (i < cutApples.Length && cutApples[i] != null)
                {
                    cutApples[i].SetActive(false);
                }
            }
        }
    }


    // =========================================================
    // HỆ THỐNG HỘI THOẠI
    // =========================================================
    public void ShowDialogue(string content)
    {
        if (dialogueBox != null)
        {
        dialogueBox.SetActive(true);
            if (dialogueText != null) dialogueText.text = content;
        }
    }

    private void HideDialogue()
    {
        if (dialogueBox != null) dialogueBox.SetActive(false);
    }

    // =========================================================
    // RESET SAU KHI THẤT BẠI
    // =========================================================
    private void ResetAfterFail()
    {
        Debug.Log("[GameManager] Resetting after fail...");

        // Ẩn dialogue
        HideDialogue();

        // Khôi phục cây bình thường
        //if (treeNormal != null) treeNormal.SetActive(true);
        //if (treeCutTrunk != null) treeCutTrunk.SetActive(false);

        // Reset vị trí cành cây nếu đã rơi
        if (treeCutBranch != null)
        {
            RectTransform branchRect = treeCutBranch.GetComponent<RectTransform>();
            if (branchRect != null)
            {
                // Trả cành cây về vị trí ban đầu (bạn cần chỉnh Y cho khớp)
                branchRect.DOKill();
            }
        }

        // Reset quả táo về vị trí ban đầu
        // if (appleCorrect != null)
        // {
        //     RectTransform appleRect = appleCorrect.GetComponent<RectTransform>();
        //     if (appleRect != null)
        //     {
        //         appleRect.DOKill();
        //     }
        // }

        // Tất cả nhân vật quay về Idle
        if (newton != null) newton.Play("Idle");
        if (girl != null) girl.Play("Idle");
        if (guy != null) guy.Play("Idle");
        if (dog != null) dog.Play("Idle");

        // Reset các item trong tray về vị trí ban đầu
        if (itemLadder != null) itemLadder.ResetToTray();
        if (itemSwatter != null) itemSwatter.ResetToTray();
        if (itemBucket != null) itemBucket.ResetToTray();
        if (itemSaw != null) itemSaw.ResetToTray();
        if (itemDumbbell != null) itemDumbbell.ResetToTray();

        // Cho phép tương tác lại
        _isProcessing = false;
    }
}
