using UnityEngine;
using UnityEngine.UI;
using UnityEngine.EventSystems;
using DG.Tweening;

public class DraggableItem : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler
{
    public string itemID;

    private Vector3 _startPosition;
    private CanvasGroup _canvasGroup;
    private Transform _originalParent;
    private Canvas _dragCanvas;
    private void Awake()
    {
        _canvasGroup = GetComponent<CanvasGroup>();
        if (_canvasGroup == null) _canvasGroup = gameObject.AddComponent<CanvasGroup>();
    }

    private void Start()
    {
        _startPosition = transform.position;
    }

    public void OnBeginDrag(PointerEventData eventData)
    {
        _startPosition = transform.position;
        _canvasGroup.blocksRaycasts = false;

        _originalParent = transform.parent;

        // 👇 ADD CANVAS RIÊNG
        _dragCanvas = gameObject.AddComponent<Canvas>();
        _dragCanvas.overrideSorting = true;
        _dragCanvas.sortingOrder = 999; // 👈 luôn trên cùng

        gameObject.AddComponent<GraphicRaycaster>(); // đảm bảo vẫn nhận UI

        transform.SetAsLastSibling();
    }

    public void OnDrag(PointerEventData eventData)
    {
        RectTransformUtility.ScreenPointToWorldPointInRectangle(
            GetComponent<RectTransform>(),
            eventData.position,
            eventData.pressEventCamera,
            out Vector3 worldPoint);

        transform.position = worldPoint;
    }

    public void OnEndDrag(PointerEventData eventData)
    {
        _canvasGroup.blocksRaycasts = true;

        // 👇 REMOVE canvas tạm
        if (_dragCanvas != null)
            Destroy(_dragCanvas);

        GraphicRaycaster gr = GetComponent<GraphicRaycaster>();
        if (gr != null)
            Destroy(gr);

        transform.SetParent(_originalParent);

        ResetToTray();
    }

    public void ResetToTray()
    {
        transform.DOMove(_startPosition, 0.3f);
    }
}
