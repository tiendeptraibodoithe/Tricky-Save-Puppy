using UnityEngine;
using UnityEngine.UI;
using UnityEngine.EventSystems;
using DG.Tweening;

public class DraggableItem : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler
{
    public string itemID;
    private Vector3 _startPosition;
    private CanvasGroup _canvasGroup;

    private void Awake() {
        _canvasGroup = GetComponent<CanvasGroup>();
        if (_canvasGroup == null) _canvasGroup = gameObject.AddComponent<CanvasGroup>();
    }

    // LƯU VỊ TRÍ NGAY KHI GAME BẮT ĐẦU
    private void Start() {
        _startPosition = transform.position;
    }

    public void OnBeginDrag(PointerEventData eventData) {
        // Cập nhật lại đề phòng màn hình bị resize
        _startPosition = transform.position; 
        _canvasGroup.blocksRaycasts = false;
        transform.SetAsLastSibling();
    }

    public void OnDrag(PointerEventData eventData) 
    {
        Vector3 mousePos = eventData.position;
        mousePos.z = transform.position.z; 
        
        RectTransformUtility.ScreenPointToWorldPointInRectangle(
            GetComponent<RectTransform>(), 
            eventData.position, 
            eventData.pressEventCamera, 
            out Vector3 worldPoint);
            
        transform.position = worldPoint;
    }

    public void OnEndDrag(PointerEventData eventData) {
        _canvasGroup.blocksRaycasts = true;
        ResetToTray(); // Mặc định thả ra là bay về khay (DropZone sẽ can thiệp nếu trúng)
    }
    
    public void ResetToTray() {
        transform.DOMove(_startPosition, 0.3f);
    }
}
