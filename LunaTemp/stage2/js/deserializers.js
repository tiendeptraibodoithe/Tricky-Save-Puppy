var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i954 = root || request.c( 'UnityEngine.JointSpring' )
  var i955 = data
  i954.spring = i955[0]
  i954.damper = i955[1]
  i954.targetPosition = i955[2]
  return i954
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i956 = root || request.c( 'UnityEngine.JointMotor' )
  var i957 = data
  i956.m_TargetVelocity = i957[0]
  i956.m_Force = i957[1]
  i956.m_FreeSpin = i957[2]
  return i956
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i958 = root || request.c( 'UnityEngine.JointLimits' )
  var i959 = data
  i958.m_Min = i959[0]
  i958.m_Max = i959[1]
  i958.m_Bounciness = i959[2]
  i958.m_BounceMinVelocity = i959[3]
  i958.m_ContactDistance = i959[4]
  i958.minBounce = i959[5]
  i958.maxBounce = i959[6]
  return i958
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i960 = root || request.c( 'UnityEngine.JointDrive' )
  var i961 = data
  i960.m_PositionSpring = i961[0]
  i960.m_PositionDamper = i961[1]
  i960.m_MaximumForce = i961[2]
  i960.m_UseAcceleration = i961[3]
  return i960
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i962 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i963 = data
  i962.m_Spring = i963[0]
  i962.m_Damper = i963[1]
  return i962
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i965 = data
  i964.m_Limit = i965[0]
  i964.m_Bounciness = i965[1]
  i964.m_ContactDistance = i965[2]
  return i964
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i966 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i967 = data
  i966.m_ExtremumSlip = i967[0]
  i966.m_ExtremumValue = i967[1]
  i966.m_AsymptoteSlip = i967[2]
  i966.m_AsymptoteValue = i967[3]
  i966.m_Stiffness = i967[4]
  return i966
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i968 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i969 = data
  i968.m_LowerAngle = i969[0]
  i968.m_UpperAngle = i969[1]
  return i968
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i970 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i971 = data
  i970.m_MotorSpeed = i971[0]
  i970.m_MaximumMotorTorque = i971[1]
  return i970
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i972 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i973 = data
  i972.m_DampingRatio = i973[0]
  i972.m_Frequency = i973[1]
  i972.m_Angle = i973[2]
  return i972
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i974 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i975 = data
  i974.m_LowerTranslation = i975[0]
  i974.m_UpperTranslation = i975[1]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i977 = data
  i976.name = i977[0]
  i976.width = i977[1]
  i976.height = i977[2]
  i976.mipmapCount = i977[3]
  i976.anisoLevel = i977[4]
  i976.filterMode = i977[5]
  i976.hdr = !!i977[6]
  i976.format = i977[7]
  i976.wrapMode = i977[8]
  i976.alphaIsTransparency = !!i977[9]
  i976.alphaSource = i977[10]
  i976.graphicsFormat = i977[11]
  i976.sRGBTexture = !!i977[12]
  i976.desiredColorSpace = i977[13]
  i976.wrapU = i977[14]
  i976.wrapV = i977[15]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i978 = root || new pc.UnityMaterial()
  var i979 = data
  i978.name = i979[0]
  request.r(i979[1], i979[2], 0, i978, 'shader')
  i978.renderQueue = i979[3]
  i978.enableInstancing = !!i979[4]
  var i981 = i979[5]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i981[i + 0]) );
  }
  i978.floatParameters = i980
  var i983 = i979[6]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i983[i + 0]) );
  }
  i978.colorParameters = i982
  var i985 = i979[7]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i985[i + 0]) );
  }
  i978.vectorParameters = i984
  var i987 = i979[8]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i987[i + 0]) );
  }
  i978.textureParameters = i986
  var i989 = i979[9]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i989[i + 0]) );
  }
  i978.materialFlags = i988
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i993 = data
  i992.name = i993[0]
  i992.value = i993[1]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i997 = data
  i996.name = i997[0]
  i996.value = new pc.Color(i997[1], i997[2], i997[3], i997[4])
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1001 = data
  i1000.name = i1001[0]
  i1000.value = new pc.Vec4( i1001[1], i1001[2], i1001[3], i1001[4] )
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1005 = data
  i1004.name = i1005[0]
  request.r(i1005[1], i1005[2], 0, i1004, 'value')
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1009 = data
  i1008.name = i1009[0]
  i1008.enabled = !!i1009[1]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1011 = data
  i1010.name = i1011[0]
  i1010.index = i1011[1]
  i1010.startup = !!i1011[2]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1013 = data
  i1012.aspect = i1013[0]
  i1012.orthographic = !!i1013[1]
  i1012.orthographicSize = i1013[2]
  i1012.backgroundColor = new pc.Color(i1013[3], i1013[4], i1013[5], i1013[6])
  i1012.nearClipPlane = i1013[7]
  i1012.farClipPlane = i1013[8]
  i1012.fieldOfView = i1013[9]
  i1012.depth = i1013[10]
  i1012.clearFlags = i1013[11]
  i1012.cullingMask = i1013[12]
  i1012.rect = i1013[13]
  request.r(i1013[14], i1013[15], 0, i1012, 'targetTexture')
  i1012.usePhysicalProperties = !!i1013[16]
  i1012.focalLength = i1013[17]
  i1012.sensorSize = new pc.Vec2( i1013[18], i1013[19] )
  i1012.lensShift = new pc.Vec2( i1013[20], i1013[21] )
  i1012.gateFit = i1013[22]
  i1012.commandBufferCount = i1013[23]
  i1012.cameraType = i1013[24]
  i1012.enabled = !!i1013[25]
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1015 = data
  i1014.name = i1015[0]
  i1014.tagId = i1015[1]
  i1014.enabled = !!i1015[2]
  i1014.isStatic = !!i1015[3]
  i1014.layer = i1015[4]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1017 = data
  i1016.pivot = new pc.Vec2( i1017[0], i1017[1] )
  i1016.anchorMin = new pc.Vec2( i1017[2], i1017[3] )
  i1016.anchorMax = new pc.Vec2( i1017[4], i1017[5] )
  i1016.sizeDelta = new pc.Vec2( i1017[6], i1017[7] )
  i1016.anchoredPosition3D = new pc.Vec3( i1017[8], i1017[9], i1017[10] )
  i1016.rotation = new pc.Quat(i1017[11], i1017[12], i1017[13], i1017[14])
  i1016.scale = new pc.Vec3( i1017[15], i1017[16], i1017[17] )
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1019 = data
  i1018.planeDistance = i1019[0]
  i1018.referencePixelsPerUnit = i1019[1]
  i1018.isFallbackOverlay = !!i1019[2]
  i1018.renderMode = i1019[3]
  i1018.renderOrder = i1019[4]
  i1018.sortingLayerName = i1019[5]
  i1018.sortingOrder = i1019[6]
  i1018.scaleFactor = i1019[7]
  request.r(i1019[8], i1019[9], 0, i1018, 'worldCamera')
  i1018.overrideSorting = !!i1019[10]
  i1018.pixelPerfect = !!i1019[11]
  i1018.targetDisplay = i1019[12]
  i1018.overridePixelPerfect = !!i1019[13]
  i1018.enabled = !!i1019[14]
  return i1018
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1020 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1021 = data
  i1020.m_UiScaleMode = i1021[0]
  i1020.m_ReferencePixelsPerUnit = i1021[1]
  i1020.m_ScaleFactor = i1021[2]
  i1020.m_ReferenceResolution = new pc.Vec2( i1021[3], i1021[4] )
  i1020.m_ScreenMatchMode = i1021[5]
  i1020.m_MatchWidthOrHeight = i1021[6]
  i1020.m_PhysicalUnit = i1021[7]
  i1020.m_FallbackScreenDPI = i1021[8]
  i1020.m_DefaultSpriteDPI = i1021[9]
  i1020.m_DynamicPixelsPerUnit = i1021[10]
  i1020.m_PresetInfoIsWorld = !!i1021[11]
  return i1020
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1022 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1023 = data
  i1022.m_IgnoreReversedGraphics = !!i1023[0]
  i1022.m_BlockingObjects = i1023[1]
  i1022.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1023[2] )
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1025 = data
  i1024.cullTransparentMesh = !!i1025[0]
  return i1024
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1026 = root || request.c( 'UnityEngine.UI.Image' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'm_Sprite')
  i1026.m_Type = i1027[2]
  i1026.m_PreserveAspect = !!i1027[3]
  i1026.m_FillCenter = !!i1027[4]
  i1026.m_FillMethod = i1027[5]
  i1026.m_FillAmount = i1027[6]
  i1026.m_FillClockwise = !!i1027[7]
  i1026.m_FillOrigin = i1027[8]
  i1026.m_UseSpriteMesh = !!i1027[9]
  i1026.m_PixelsPerUnitMultiplier = i1027[10]
  request.r(i1027[11], i1027[12], 0, i1026, 'm_Material')
  i1026.m_Maskable = !!i1027[13]
  i1026.m_Color = new pc.Color(i1027[14], i1027[15], i1027[16], i1027[17])
  i1026.m_RaycastTarget = !!i1027[18]
  i1026.m_RaycastPadding = new pc.Vec4( i1027[19], i1027[20], i1027[21], i1027[22] )
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1029 = data
  i1028.color = new pc.Color(i1029[0], i1029[1], i1029[2], i1029[3])
  request.r(i1029[4], i1029[5], 0, i1028, 'sprite')
  i1028.flipX = !!i1029[6]
  i1028.flipY = !!i1029[7]
  i1028.drawMode = i1029[8]
  i1028.size = new pc.Vec2( i1029[9], i1029[10] )
  i1028.tileMode = i1029[11]
  i1028.adaptiveModeThreshold = i1029[12]
  i1028.maskInteraction = i1029[13]
  i1028.spriteSortPoint = i1029[14]
  i1028.enabled = !!i1029[15]
  request.r(i1029[16], i1029[17], 0, i1028, 'sharedMaterial')
  var i1031 = i1029[18]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 2) {
  request.r(i1031[i + 0], i1031[i + 1], 2, i1030, '')
  }
  i1028.sharedMaterials = i1030
  i1028.receiveShadows = !!i1029[19]
  i1028.shadowCastingMode = i1029[20]
  i1028.sortingLayerID = i1029[21]
  i1028.sortingOrder = i1029[22]
  i1028.lightmapIndex = i1029[23]
  i1028.lightmapSceneIndex = i1029[24]
  i1028.lightmapScaleOffset = new pc.Vec4( i1029[25], i1029[26], i1029[27], i1029[28] )
  i1028.lightProbeUsage = i1029[29]
  i1028.reflectionProbeUsage = i1029[30]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1035 = data
  request.r(i1035[0], i1035[1], 0, i1034, 'animatorController')
  request.r(i1035[2], i1035[3], 0, i1034, 'avatar')
  i1034.updateMode = i1035[4]
  i1034.hasTransformHierarchy = !!i1035[5]
  i1034.applyRootMotion = !!i1035[6]
  var i1037 = i1035[7]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 2) {
  request.r(i1037[i + 0], i1037[i + 1], 2, i1036, '')
  }
  i1034.humanBones = i1036
  i1034.enabled = !!i1035[8]
  return i1034
}

Deserializers["Project.Gameplay.FrameAnimator"] = function (request, data, root) {
  var i1040 = root || request.c( 'Project.Gameplay.FrameAnimator' )
  var i1041 = data
  request.r(i1041[0], i1041[1], 0, i1040, 'imageDisplay')
  request.r(i1041[2], i1041[3], 0, i1040, 'spriteDisplay')
  var i1043 = i1041[4]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 2) {
  request.r(i1043[i + 0], i1043[i + 1], 2, i1042, '')
  }
  i1040.frames = i1042
  i1040.fps = i1041[5]
  i1040.loop = !!i1041[6]
  i1040.playOnAwake = !!i1041[7]
  return i1040
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1046 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'm_FirstSelected')
  i1046.m_sendNavigationEvents = !!i1047[2]
  i1046.m_DragThreshold = i1047[3]
  return i1046
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1048 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1049 = data
  i1048.m_HorizontalAxis = i1049[0]
  i1048.m_VerticalAxis = i1049[1]
  i1048.m_SubmitButton = i1049[2]
  i1048.m_CancelButton = i1049[3]
  i1048.m_InputActionsPerSecond = i1049[4]
  i1048.m_RepeatDelay = i1049[5]
  i1048.m_ForceModuleActive = !!i1049[6]
  i1048.m_SendPointerHoverToParent = !!i1049[7]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1051 = data
  i1050.ambientIntensity = i1051[0]
  i1050.reflectionIntensity = i1051[1]
  i1050.ambientMode = i1051[2]
  i1050.ambientLight = new pc.Color(i1051[3], i1051[4], i1051[5], i1051[6])
  i1050.ambientSkyColor = new pc.Color(i1051[7], i1051[8], i1051[9], i1051[10])
  i1050.ambientGroundColor = new pc.Color(i1051[11], i1051[12], i1051[13], i1051[14])
  i1050.ambientEquatorColor = new pc.Color(i1051[15], i1051[16], i1051[17], i1051[18])
  i1050.fogColor = new pc.Color(i1051[19], i1051[20], i1051[21], i1051[22])
  i1050.fogEndDistance = i1051[23]
  i1050.fogStartDistance = i1051[24]
  i1050.fogDensity = i1051[25]
  i1050.fog = !!i1051[26]
  request.r(i1051[27], i1051[28], 0, i1050, 'skybox')
  i1050.fogMode = i1051[29]
  var i1053 = i1051[30]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1053[i + 0]) );
  }
  i1050.lightmaps = i1052
  i1050.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1051[31], i1050.lightProbes)
  i1050.lightmapsMode = i1051[32]
  i1050.mixedBakeMode = i1051[33]
  i1050.environmentLightingMode = i1051[34]
  i1050.ambientProbe = new pc.SphericalHarmonicsL2(i1051[35])
  i1050.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1051[36])
  i1050.useReferenceAmbientProbe = !!i1051[37]
  request.r(i1051[38], i1051[39], 0, i1050, 'customReflection')
  request.r(i1051[40], i1051[41], 0, i1050, 'defaultReflection')
  i1050.defaultReflectionMode = i1051[42]
  i1050.defaultReflectionResolution = i1051[43]
  i1050.sunLightObjectId = i1051[44]
  i1050.pixelLightCount = i1051[45]
  i1050.defaultReflectionHDR = !!i1051[46]
  i1050.hasLightDataAsset = !!i1051[47]
  i1050.hasManualGenerate = !!i1051[48]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1057 = data
  request.r(i1057[0], i1057[1], 0, i1056, 'lightmapColor')
  request.r(i1057[2], i1057[3], 0, i1056, 'lightmapDirection')
  request.r(i1057[4], i1057[5], 0, i1056, 'shadowMask')
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1058 = root || new UnityEngine.LightProbes()
  var i1059 = data
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1067 = data
  var i1069 = i1067[0]
  var i1068 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1069[i + 0]));
  }
  i1066.ShaderCompilationErrors = i1068
  i1066.name = i1067[1]
  i1066.guid = i1067[2]
  var i1071 = i1067[3]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( i1071[i + 0] );
  }
  i1066.shaderDefinedKeywords = i1070
  var i1073 = i1067[4]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1073[i + 0]) );
  }
  i1066.passes = i1072
  var i1075 = i1067[5]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1075[i + 0]) );
  }
  i1066.usePasses = i1074
  var i1077 = i1067[6]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1077[i + 0]) );
  }
  i1066.defaultParameterValues = i1076
  request.r(i1067[7], i1067[8], 0, i1066, 'unityFallbackShader')
  i1066.readDepth = !!i1067[9]
  i1066.hasDepthOnlyPass = !!i1067[10]
  i1066.isCreatedByShaderGraph = !!i1067[11]
  i1066.disableBatching = !!i1067[12]
  i1066.compiled = !!i1067[13]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1081 = data
  i1080.shaderName = i1081[0]
  i1080.errorMessage = i1081[1]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1086 = root || new pc.UnityShaderPass()
  var i1087 = data
  i1086.id = i1087[0]
  i1086.subShaderIndex = i1087[1]
  i1086.name = i1087[2]
  i1086.passType = i1087[3]
  i1086.grabPassTextureName = i1087[4]
  i1086.usePass = !!i1087[5]
  i1086.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1087[6], i1086.zTest)
  i1086.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1087[7], i1086.zWrite)
  i1086.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1087[8], i1086.culling)
  i1086.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1087[9], i1086.blending)
  i1086.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1087[10], i1086.alphaBlending)
  i1086.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1087[11], i1086.colorWriteMask)
  i1086.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1087[12], i1086.offsetUnits)
  i1086.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1087[13], i1086.offsetFactor)
  i1086.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1087[14], i1086.stencilRef)
  i1086.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1087[15], i1086.stencilReadMask)
  i1086.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1087[16], i1086.stencilWriteMask)
  i1086.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1087[17], i1086.stencilOp)
  i1086.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1087[18], i1086.stencilOpFront)
  i1086.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1087[19], i1086.stencilOpBack)
  var i1089 = i1087[20]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1089[i + 0]) );
  }
  i1086.tags = i1088
  var i1091 = i1087[21]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( i1091[i + 0] );
  }
  i1086.passDefinedKeywords = i1090
  var i1093 = i1087[22]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1093[i + 0]) );
  }
  i1086.passDefinedKeywordGroups = i1092
  var i1095 = i1087[23]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1095[i + 0]) );
  }
  i1086.variants = i1094
  var i1097 = i1087[24]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1097[i + 0]) );
  }
  i1086.excludedVariants = i1096
  i1086.hasDepthReader = !!i1087[25]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1099 = data
  i1098.val = i1099[0]
  i1098.name = i1099[1]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1101 = data
  i1100.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1101[0], i1100.src)
  i1100.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1101[1], i1100.dst)
  i1100.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1101[2], i1100.op)
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1103 = data
  i1102.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[0], i1102.pass)
  i1102.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[1], i1102.fail)
  i1102.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[2], i1102.zFail)
  i1102.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[3], i1102.comp)
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1107 = data
  i1106.name = i1107[0]
  i1106.value = i1107[1]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1111 = data
  var i1113 = i1111[0]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( i1113[i + 0] );
  }
  i1110.keywords = i1112
  i1110.hasDiscard = !!i1111[1]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1117 = data
  i1116.passId = i1117[0]
  i1116.subShaderIndex = i1117[1]
  var i1119 = i1117[2]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( i1119[i + 0] );
  }
  i1116.keywords = i1118
  i1116.vertexProgram = i1117[3]
  i1116.fragmentProgram = i1117[4]
  i1116.exportedForWebGl2 = !!i1117[5]
  i1116.readDepth = !!i1117[6]
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1123 = data
  request.r(i1123[0], i1123[1], 0, i1122, 'shader')
  i1122.pass = i1123[2]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1127 = data
  i1126.name = i1127[0]
  i1126.type = i1127[1]
  i1126.value = new pc.Vec4( i1127[2], i1127[3], i1127[4], i1127[5] )
  i1126.textureValue = i1127[6]
  i1126.shaderPropertyFlag = i1127[7]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1129 = data
  i1128.name = i1129[0]
  request.r(i1129[1], i1129[2], 0, i1128, 'texture')
  i1128.aabb = i1129[3]
  i1128.vertices = i1129[4]
  i1128.triangles = i1129[5]
  i1128.textureRect = UnityEngine.Rect.MinMaxRect(i1129[6], i1129[7], i1129[8], i1129[9])
  i1128.packedRect = UnityEngine.Rect.MinMaxRect(i1129[10], i1129[11], i1129[12], i1129[13])
  i1128.border = new pc.Vec4( i1129[14], i1129[15], i1129[16], i1129[17] )
  i1128.transparency = i1129[18]
  i1128.bounds = i1129[19]
  i1128.pixelsPerUnit = i1129[20]
  i1128.textureWidth = i1129[21]
  i1128.textureHeight = i1129[22]
  i1128.nativeSize = new pc.Vec2( i1129[23], i1129[24] )
  i1128.pivot = new pc.Vec2( i1129[25], i1129[26] )
  i1128.textureRectOffset = new pc.Vec2( i1129[27], i1129[28] )
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1131 = data
  i1130.name = i1131[0]
  i1130.wrapMode = i1131[1]
  i1130.isLooping = !!i1131[2]
  i1130.length = i1131[3]
  var i1133 = i1131[4]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1133[i + 0]) );
  }
  i1130.curves = i1132
  var i1135 = i1131[5]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1135[i + 0]) );
  }
  i1130.events = i1134
  i1130.halfPrecision = !!i1131[6]
  i1130._frameRate = i1131[7]
  i1130.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1131[8], i1130.localBounds)
  i1130.hasMuscleCurves = !!i1131[9]
  var i1137 = i1131[10]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( i1137[i + 0] );
  }
  i1130.clipMuscleConstant = i1136
  i1130.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1131[11], i1130.clipBindingConstant)
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1141 = data
  i1140.path = i1141[0]
  i1140.hash = i1141[1]
  i1140.componentType = i1141[2]
  i1140.property = i1141[3]
  i1140.keys = i1141[4]
  var i1143 = i1141[5]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1143[i + 0]) );
  }
  i1140.objectReferenceKeys = i1142
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1147 = data
  i1146.time = i1147[0]
  request.r(i1147[1], i1147[2], 0, i1146, 'value')
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1151 = data
  i1150.functionName = i1151[0]
  i1150.floatParameter = i1151[1]
  i1150.intParameter = i1151[2]
  i1150.stringParameter = i1151[3]
  request.r(i1151[4], i1151[5], 0, i1150, 'objectReferenceParameter')
  i1150.time = i1151[6]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1153 = data
  i1152.center = new pc.Vec3( i1153[0], i1153[1], i1153[2] )
  i1152.extends = new pc.Vec3( i1153[3], i1153[4], i1153[5] )
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1157 = data
  var i1159 = i1157[0]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( i1159[i + 0] );
  }
  i1156.genericBindings = i1158
  var i1161 = i1157[1]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( i1161[i + 0] );
  }
  i1156.pptrCurveMapping = i1160
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1163 = data
  i1162.name = i1163[0]
  var i1165 = i1163[1]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1165[i + 0]) );
  }
  i1162.layers = i1164
  var i1167 = i1163[2]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1167[i + 0]) );
  }
  i1162.parameters = i1166
  i1162.animationClips = i1163[3]
  i1162.avatarUnsupported = i1163[4]
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1171 = data
  i1170.name = i1171[0]
  i1170.defaultWeight = i1171[1]
  i1170.blendingMode = i1171[2]
  i1170.avatarMask = i1171[3]
  i1170.syncedLayerIndex = i1171[4]
  i1170.syncedLayerAffectsTiming = !!i1171[5]
  i1170.syncedLayers = i1171[6]
  i1170.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1171[7], i1170.stateMachine)
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1173 = data
  i1172.id = i1173[0]
  i1172.name = i1173[1]
  i1172.path = i1173[2]
  var i1175 = i1173[3]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1175[i + 0]) );
  }
  i1172.states = i1174
  var i1177 = i1173[4]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1177[i + 0]) );
  }
  i1172.machines = i1176
  var i1179 = i1173[5]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1179[i + 0]) );
  }
  i1172.entryStateTransitions = i1178
  var i1181 = i1173[6]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1181[i + 0]) );
  }
  i1172.exitStateTransitions = i1180
  var i1183 = i1173[7]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1183[i + 0]) );
  }
  i1172.anyStateTransitions = i1182
  i1172.defaultStateId = i1173[8]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1187 = data
  i1186.id = i1187[0]
  i1186.name = i1187[1]
  i1186.cycleOffset = i1187[2]
  i1186.cycleOffsetParameter = i1187[3]
  i1186.cycleOffsetParameterActive = !!i1187[4]
  i1186.mirror = !!i1187[5]
  i1186.mirrorParameter = i1187[6]
  i1186.mirrorParameterActive = !!i1187[7]
  i1186.motionId = i1187[8]
  i1186.nameHash = i1187[9]
  i1186.fullPathHash = i1187[10]
  i1186.speed = i1187[11]
  i1186.speedParameter = i1187[12]
  i1186.speedParameterActive = !!i1187[13]
  i1186.tag = i1187[14]
  i1186.tagHash = i1187[15]
  i1186.writeDefaultValues = !!i1187[16]
  var i1189 = i1187[17]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 2) {
  request.r(i1189[i + 0], i1189[i + 1], 2, i1188, '')
  }
  i1186.behaviours = i1188
  var i1191 = i1187[18]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1191[i + 0]) );
  }
  i1186.transitions = i1190
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1197 = data
  i1196.fullPath = i1197[0]
  i1196.canTransitionToSelf = !!i1197[1]
  i1196.duration = i1197[2]
  i1196.exitTime = i1197[3]
  i1196.hasExitTime = !!i1197[4]
  i1196.hasFixedDuration = !!i1197[5]
  i1196.interruptionSource = i1197[6]
  i1196.offset = i1197[7]
  i1196.orderedInterruption = !!i1197[8]
  i1196.destinationStateId = i1197[9]
  i1196.isExit = !!i1197[10]
  i1196.mute = !!i1197[11]
  i1196.solo = !!i1197[12]
  var i1199 = i1197[13]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1199[i + 0]) );
  }
  i1196.conditions = i1198
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1205 = data
  i1204.destinationStateId = i1205[0]
  i1204.isExit = !!i1205[1]
  i1204.mute = !!i1205[2]
  i1204.solo = !!i1205[3]
  var i1207 = i1205[4]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1207[i + 0]) );
  }
  i1204.conditions = i1206
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1211 = data
  i1210.defaultBool = !!i1211[0]
  i1210.defaultFloat = i1211[1]
  i1210.defaultInt = i1211[2]
  i1210.name = i1211[3]
  i1210.nameHash = i1211[4]
  i1210.type = i1211[5]
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1213 = data
  var i1215 = i1213[0]
  var i1214 = []
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1215[i + 0]) );
  }
  i1212.files = i1214
  i1212.componentToPrefabIds = i1213[1]
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1219 = data
  i1218.path = i1219[0]
  request.r(i1219[1], i1219[2], 0, i1218, 'unityObject')
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1221 = data
  var i1223 = i1221[0]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1223[i + 0]) );
  }
  i1220.scriptsExecutionOrder = i1222
  var i1225 = i1221[1]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1225[i + 0]) );
  }
  i1220.sortingLayers = i1224
  var i1227 = i1221[2]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1227[i + 0]) );
  }
  i1220.cullingLayers = i1226
  i1220.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1221[3], i1220.timeSettings)
  i1220.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1221[4], i1220.physicsSettings)
  i1220.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1221[5], i1220.physics2DSettings)
  i1220.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1221[6], i1220.qualitySettings)
  i1220.enableRealtimeShadows = !!i1221[7]
  i1220.enableAutoInstancing = !!i1221[8]
  i1220.enableStaticBatching = !!i1221[9]
  i1220.enableDynamicBatching = !!i1221[10]
  i1220.lightmapEncodingQuality = i1221[11]
  i1220.desiredColorSpace = i1221[12]
  var i1229 = i1221[13]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( i1229[i + 0] );
  }
  i1220.allTags = i1228
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1233 = data
  i1232.name = i1233[0]
  i1232.value = i1233[1]
  return i1232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1237 = data
  i1236.id = i1237[0]
  i1236.name = i1237[1]
  i1236.value = i1237[2]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1241 = data
  i1240.id = i1241[0]
  i1240.name = i1241[1]
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1243 = data
  i1242.fixedDeltaTime = i1243[0]
  i1242.maximumDeltaTime = i1243[1]
  i1242.timeScale = i1243[2]
  i1242.maximumParticleTimestep = i1243[3]
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1245 = data
  i1244.gravity = new pc.Vec3( i1245[0], i1245[1], i1245[2] )
  i1244.defaultSolverIterations = i1245[3]
  i1244.bounceThreshold = i1245[4]
  i1244.autoSyncTransforms = !!i1245[5]
  i1244.autoSimulation = !!i1245[6]
  var i1247 = i1245[7]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1247[i + 0]) );
  }
  i1244.collisionMatrix = i1246
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1251 = data
  i1250.enabled = !!i1251[0]
  i1250.layerId = i1251[1]
  i1250.otherLayerId = i1251[2]
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1253 = data
  request.r(i1253[0], i1253[1], 0, i1252, 'material')
  i1252.gravity = new pc.Vec2( i1253[2], i1253[3] )
  i1252.positionIterations = i1253[4]
  i1252.velocityIterations = i1253[5]
  i1252.velocityThreshold = i1253[6]
  i1252.maxLinearCorrection = i1253[7]
  i1252.maxAngularCorrection = i1253[8]
  i1252.maxTranslationSpeed = i1253[9]
  i1252.maxRotationSpeed = i1253[10]
  i1252.baumgarteScale = i1253[11]
  i1252.baumgarteTOIScale = i1253[12]
  i1252.timeToSleep = i1253[13]
  i1252.linearSleepTolerance = i1253[14]
  i1252.angularSleepTolerance = i1253[15]
  i1252.defaultContactOffset = i1253[16]
  i1252.autoSimulation = !!i1253[17]
  i1252.queriesHitTriggers = !!i1253[18]
  i1252.queriesStartInColliders = !!i1253[19]
  i1252.callbacksOnDisable = !!i1253[20]
  i1252.reuseCollisionCallbacks = !!i1253[21]
  i1252.autoSyncTransforms = !!i1253[22]
  var i1255 = i1253[23]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1255[i + 0]) );
  }
  i1252.collisionMatrix = i1254
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1259 = data
  i1258.enabled = !!i1259[0]
  i1258.layerId = i1259[1]
  i1258.otherLayerId = i1259[2]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1261 = data
  var i1263 = i1261[0]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1263[i + 0]) );
  }
  i1260.qualityLevels = i1262
  var i1265 = i1261[1]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( i1265[i + 0] );
  }
  i1260.names = i1264
  i1260.shadows = i1261[2]
  i1260.anisotropicFiltering = i1261[3]
  i1260.antiAliasing = i1261[4]
  i1260.lodBias = i1261[5]
  i1260.shadowCascades = i1261[6]
  i1260.shadowDistance = i1261[7]
  i1260.shadowmaskMode = i1261[8]
  i1260.shadowProjection = i1261[9]
  i1260.shadowResolution = i1261[10]
  i1260.softParticles = !!i1261[11]
  i1260.softVegetation = !!i1261[12]
  i1260.activeColorSpace = i1261[13]
  i1260.desiredColorSpace = i1261[14]
  i1260.masterTextureLimit = i1261[15]
  i1260.maxQueuedFrames = i1261[16]
  i1260.particleRaycastBudget = i1261[17]
  i1260.pixelLightCount = i1261[18]
  i1260.realtimeReflectionProbes = !!i1261[19]
  i1260.shadowCascade2Split = i1261[20]
  i1260.shadowCascade4Split = new pc.Vec3( i1261[21], i1261[22], i1261[23] )
  i1260.streamingMipmapsActive = !!i1261[24]
  i1260.vSyncCount = i1261[25]
  i1260.asyncUploadBufferSize = i1261[26]
  i1260.asyncUploadTimeSlice = i1261[27]
  i1260.billboardsFaceCameraPosition = !!i1261[28]
  i1260.shadowNearPlaneOffset = i1261[29]
  i1260.streamingMipmapsMemoryBudget = i1261[30]
  i1260.maximumLODLevel = i1261[31]
  i1260.streamingMipmapsAddAllCameras = !!i1261[32]
  i1260.streamingMipmapsMaxLevelReduction = i1261[33]
  i1260.streamingMipmapsRenderersPerFrame = i1261[34]
  i1260.resolutionScalingFixedDPIFactor = i1261[35]
  i1260.streamingMipmapsMaxFileIORequests = i1261[36]
  i1260.currentQualityLevel = i1261[37]
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1271 = data
  i1270.mode = i1271[0]
  i1270.parameter = i1271[1]
  i1270.threshold = i1271[2]
  return i1270
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"20":[21],"22":[21],"23":[21],"24":[21],"25":[21],"26":[21],"27":[28],"29":[1],"30":[31],"32":[31],"33":[31],"34":[31],"35":[31],"36":[31],"37":[31],"38":[39],"40":[39],"41":[39],"42":[39],"43":[39],"44":[39],"45":[39],"46":[39],"47":[39],"48":[39],"49":[39],"50":[39],"51":[39],"52":[1],"53":[54],"55":[56],"57":[56],"4":[3],"58":[59],"60":[11],"61":[59],"62":[3],"63":[3],"7":[4],"9":[8,3],"64":[3],"6":[4],"65":[3],"66":[3],"67":[3],"68":[3],"69":[3],"70":[3],"71":[3],"72":[3],"73":[3],"74":[8,3],"75":[3],"76":[3],"77":[3],"78":[3],"79":[8,3],"80":[3],"81":[17],"82":[17],"18":[17],"83":[17],"84":[1],"85":[1],"86":[87],"88":[1],"89":[3],"90":[54,3],"91":[3,8],"92":[3],"93":[8,3],"94":[54],"95":[8,3],"96":[3],"97":[59]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.MonoBehaviour","Project.Gameplay.FrameAnimator","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Texture2D","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f3";

Deserializers.productName = "Tricky Save Puppy";

Deserializers.lunaInitializationTime = "04/08/2026 03:27:38";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "36001";

Deserializers.projectId = "3cb7bf85248413f429868b540b945c64";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.timeline: 1.7.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "ee6c2589-af83-469e-9eba-e20f9e024018";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

