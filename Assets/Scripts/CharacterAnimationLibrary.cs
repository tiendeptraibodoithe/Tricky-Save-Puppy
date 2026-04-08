using UnityEngine;
using System.Collections.Generic;

namespace Project.Gameplay
{
    [System.Serializable]
    public class AnimationSequence
    {
        public string actionName; // Tên hành động (ví dụ: "Idle", "Angry", "Win")
        public Sprite[] frames;   // Danh sách ảnh PNG tương ứng
    }

    public class CharacterAnimationLibrary : MonoBehaviour
    {
        public List<AnimationSequence> animations = new List<AnimationSequence>();
        
        private FrameAnimator _animator;

        private void Awake()
        {
            _animator = GetComponent<FrameAnimator>();
        }

        public void Play(string actionName, bool loop = true)
        {
            AnimationSequence seq = animations.Find(a => a.actionName == actionName);
            if (seq != null && _animator != null)
            {
                _animator.loop = loop;
                _animator.SetAnimationFrames(seq.frames);
            }
            else
            {
                Debug.LogWarning("Animation not found: " + actionName + " on " + gameObject.name);
            }
        }
    }
}
