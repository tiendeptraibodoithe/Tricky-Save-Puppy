using UnityEngine;
using UnityEngine.UI;

namespace Project.Gameplay
{
    public class FrameAnimator : MonoBehaviour
    {
        [Header("References")]
        public Image imageDisplay;
        public SpriteRenderer spriteDisplay;

        [Header("Settings")]
        public Sprite[] frames;
        public float fps = 24.0f;
        public bool loop = true;
        public bool playOnAwake = true;

        private int _currentFrame = 0;
        private float _timer = 0f;
        private bool _isPlaying = false;

        private void Awake()
        {
            // Tự động tìm Image nếu chưa có
            if (imageDisplay == null) imageDisplay = GetComponent<Image>();
            // Tự động tìm SpriteRenderer nếu chưa có
            if (spriteDisplay == null) spriteDisplay = GetComponent<SpriteRenderer>();
        }

        private void Start()
        {
            if (playOnAwake && frames != null && frames.Length > 0)
            {
                PlayAnimation();
            }
        }

        private void Update()
        {
            if (!_isPlaying || frames == null || frames.Length == 0) return;

            _timer += Time.deltaTime;
            float frameDuration = 1.0f / fps;

            if (_timer >= frameDuration)
            {
                _timer -= frameDuration;
                _currentFrame++;

                if (_currentFrame >= frames.Length)
                {
                    if (loop)
                    {
                        _currentFrame = 0;
                    }
                    else
                    {
                        _currentFrame = frames.Length - 1;
                        _isPlaying = false;
                    }
                }

                // Cập nhật cho Image (UI)
                if (imageDisplay != null)
                {
                    imageDisplay.sprite = frames[_currentFrame];
                }
                
                // Cập nhật cho SpriteRenderer (World Object)
                if (spriteDisplay != null)
                {
                    spriteDisplay.sprite = frames[_currentFrame];
                }
            }
        }

        public void PlayAnimation()
        {
            _isPlaying = true;
            _timer = 0f;
            _currentFrame = 0;
        }

        public void StopAnimation()
        {
            _isPlaying = false;
        }

        public void SetAnimationFrames(Sprite[] newFrames, bool startNow = true)
        {
            frames = newFrames;
            _currentFrame = 0;
            _timer = 0f;
            if (startNow) _isPlaying = true;
        }
    }
}

