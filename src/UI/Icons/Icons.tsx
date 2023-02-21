import * as React from "react"
import Svg, {
  Mask,
  Path,
  G,
  Defs,
  LinearGradient,
  Stop,
  SvgProps, ClipPath,
} from "react-native-svg"

type DefaultProps = JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<Svg> & Pick<Readonly<SvgProps>, "width" | "height" | "viewBox" | "color" | "title" | "children" | "opacity" | "fill" | "fillOpacity" | "fillRule" | "stroke" | "strokeWidth" | "strokeOpacity" | "strokeDasharray" | "strokeDashoffset" | "strokeLinecap" | "strokeLinejoin" | "strokeMiterlimit" | "vectorEffect" | "clipRule" | "clipPath" | "translate" | "translateX" | "translateY" | "origin" | "originX" | "originY" | "scale" | "scaleX" | "scaleY" | "skew" | "skewX" | "skewY" | "rotation" | "x" | "y" | "transform" | "pointerEvents" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "disabled" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "delayPressIn" | "delayPressOut" | "delayLongPress" | "id" | "marker" | "markerStart" | "markerMid" | "markerEnd" | "mask" | "onLayout" | "font" | "fontStyle" | "fontVariant" | "fontWeight" | "fontStretch" | "fontSize" | "fontFamily" | "textAnchor" | "textDecoration" | "letterSpacing" | "wordSpacing" | "kerning" | "fontFeatureSettings" | "fontVariantLigatures" | "fontVariationSettings" | "hitSlop" | "removeClippedSubviews" | "style" | "testID" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage"> & { readonly preserveAspectRatio?: string | undefined } & {}

export const IconHome = (props: DefaultProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      d="M10.198 19.655v-3a2 2 0 0 1 4 0v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-5.3a1.7 1.7 0 0 1 1.7-1.7c.46 0 .68-.57.33-.87l-8.36-7.53c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87a1.7 1.7 0 0 1 1.7 1.7v5.3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1Z"
      fill={ props.fill }
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={21.4}
        y1={20.695}
        x2={4.827}
        y2={2.386}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF1843" />
        <Stop offset={1} stopColor="#FF7E95" />
      </LinearGradient>
    </Defs>
  </Svg>
)

export const IconRussia = (props: DefaultProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path d="M0 2a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4.667H0V2Z" fill="#fff" />
    <Path d="M0 6.667h20v6.666H0V6.667Z" fill="#1A5AFF" />
    <Path
      d="M0 13.333h20V18a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4.667Z"
      fill="#FF1E1E"
    />
  </Svg>
)

export const IconSearch = (props: DefaultProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5Zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z"
        fill="#4A556C"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export const IconMap = (props: DefaultProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5ZM15 19l-6-2.11V5l6 2.11V19Z"
        fill={ props.fill ? props.fill : "#0E121A" }
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export const IconRating = (props: DefaultProps) => (
  <Svg
    width={14}
    height={14}
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="m7 10.074 2.42 1.464a.582.582 0 0 0 .87-.63l-.642-2.753L11.79 6.3a.582.582 0 0 0-.332-1.02l-2.818-.24-1.102-2.602a.584.584 0 0 0-1.074 0L5.361 5.034l-2.818.24a.582.582 0 0 0-.332 1.02L4.35 8.15l-.641 2.754a.582.582 0 0 0 .87.63L7 10.074Z"
        fill="#FFDD2D"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h14v14H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export const IconGEO = (props: DefaultProps) => (
  <Svg
    width={ props.width ? props.width : 14 }
    height={ props.height ? props.height : 14}
    {...props}
  >
    <Path
      d="M11.208 2.001c-.066.007-2.032.652-4.441 1.454C4.388 4.25 2.4 4.922 2.349 4.953a.819.819 0 0 0-.162.134 1.024 1.024 0 0 0-.126.208.62.62 0 0 0-.061.293c0 .139.012.19.075.324a.62.62 0 0 0 .187.246c.061.047.143.1.18.115.038.016.847.262 1.794.546.946.284 1.785.544 1.863.58.084.039.194.121.281.205.077.078.169.195.204.258.033.064.3.915.593 1.887.295.987.558 1.822.593 1.885.035.064.105.15.157.192.051.043.15.099.218.127a.825.825 0 0 0 .539.005.892.892 0 0 0 .213-.122.779.779 0 0 0 .157-.176c.03-.052.705-2.04 1.5-4.419 1.329-3.98 1.443-4.34 1.446-4.49a.562.562 0 0 0-.056-.292 1.141 1.141 0 0 0-.13-.21.888.888 0 0 0-.173-.14 1.158 1.158 0 0 0-.21-.089.78.78 0 0 0-.223-.019Z"
      fill="#1F2531"
    />
  </Svg>
)

export const IconGEOBig = (props: DefaultProps) => (
  <Svg
    width={20}
    height={20}
    {...props}
  >
    <Path
      d="M16.01 2.86c-.093.01-2.902.93-6.343 2.076C6.269 6.07 3.43 7.032 3.356 7.076a1.17 1.17 0 0 0-.231.19 1.463 1.463 0 0 0-.18.299.885.885 0 0 0-.088.418c0 .198.017.272.107.462.077.161.15.262.268.352.087.067.204.144.258.164.053.024 1.208.375 2.561.78 1.353.406 2.551.777 2.662.828.12.057.277.174.401.294.11.111.241.278.292.369.046.09.428 1.306.846 2.696.422 1.41.797 2.602.848 2.692.05.09.15.215.224.275.074.06.214.14.311.18a1.18 1.18 0 0 0 .77.007c.087-.03.225-.11.305-.174.08-.063.18-.177.224-.25.044-.074 1.008-2.914 2.143-6.314 1.898-5.686 2.062-6.199 2.065-6.413a.803.803 0 0 0-.08-.419c-.047-.1-.13-.234-.184-.298a1.267 1.267 0 0 0-.248-.2 1.654 1.654 0 0 0-.301-.128 1.116 1.116 0 0 0-.318-.027Z"
      fill="#1F2531"
    />
  </Svg>
)