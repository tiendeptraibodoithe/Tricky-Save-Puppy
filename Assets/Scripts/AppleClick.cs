using UnityEngine;
using UnityEngine.EventSystems;

public class AppleClick : MonoBehaviour, IPointerClickHandler
{
    public void OnPointerClick(PointerEventData eventData)
    {
        Debug.Log("[AppleClick] Apple Clicked!");

        // Gửi lệnh xử lý về GameManager
        if (GameManager.Instance != null)
        {
            GameManager.Instance.OnAppleClicked();
        }
    }
}
