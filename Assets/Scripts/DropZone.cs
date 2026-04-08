using UnityEngine;
using UnityEngine.EventSystems;

public class DropZone : MonoBehaviour, IDropHandler
{
    public string zoneID; // "Girl", "Boy", "TreeBranch"

    public void OnDrop(PointerEventData eventData)
    {
        if (eventData.pointerDrag != null)
        {
            DraggableItem item = eventData.pointerDrag.GetComponent<DraggableItem>();
            if (item != null)
            {
                Debug.Log("[DropZone] Item " + item.itemID + " dropped on " + zoneID);

                // Gửi lệnh xử lý về GameManager
                if (GameManager.Instance != null)
                {
                    GameManager.Instance.ProcessInteraction(item.itemID, zoneID);
                }
            }
        }
    }
}
