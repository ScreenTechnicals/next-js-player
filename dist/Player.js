"use strict";
"use client";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _bs = require("react-icons/bs");
var _ai = require("react-icons/ai");
var _navigation = require("next/navigation");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Player = function Player(_ref) {
  var _videoRef$current;
  var source = _ref.source,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 100 : _ref$width,
    _ref$loop = _ref.loop,
    loop = _ref$loop === void 0 ? false : _ref$loop;
  var videoRef = (0, _react.useRef)(null);
  var inputRef = (0, _react.useRef)(null);
  var wraperRef = (0, _react.useRef)(null);
  var router = (0, _navigation.useRouter)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isplaying = _useState2[0],
    setIsplaying = _useState2[1];
  var _useState3 = (0, _react.useState)("1.0"),
    _useState4 = _slicedToArray(_useState3, 2),
    currentSpeed = _useState4[0],
    setCurrentSpeed = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    playbackToggle = _useState6[0],
    setPlaybackToggle = _useState6[1];
  var _useState7 = (0, _react.useState)(100),
    _useState8 = _slicedToArray(_useState7, 2),
    volumeValue = _useState8[0],
    setVolumeValue = _useState8[1];
  var _useState9 = (0, _react.useState)(videoRef !== null && videoRef !== void 0 && (_videoRef$current = videoRef.current) !== null && _videoRef$current !== void 0 && _videoRef$current.currentTime ? videoRef.current.currentTime : 0),
    _useState10 = _slicedToArray(_useState9, 2),
    progress = _useState10[0],
    setProgress = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isFullscreen = _useState12[0],
    setIsFullscreen = _useState12[1];
  var play = function play(isplaying) {
    setIsplaying(isplaying);
    if (isplaying && videoRef.current) {
      videoRef.current.play();
    }
  };
  var pause = function pause(isplaying) {
    setIsplaying(isplaying);
    if (!isplaying && videoRef.current) {
      videoRef.current.pause();
    }
  };
  var setPlaybackSpeed = function setPlaybackSpeed(speed) {
    videoRef.current.playbackRate = parseFloat(speed);
  };
  var changeVolume = function changeVolume(volume) {
    videoRef.current.volume = volume;
  };
  function openFullscreen() {
    if (wraperRef.current.requestFullscreen) {
      wraperRef.current.requestFullscreen();
    } else if (wraperRef.current.webkitRequestFullscreen) {
      /* Safari */
      wraperRef.current.webkitRequestFullscreen();
    } else if (wraperRef.current.msRequestFullscreen) {
      /* IE11 */
      wraperRef.current.msRequestFullscreen();
    }
  }

  /* Close fullscreen */
  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
    }
  }
  (0, _react.useEffect)(function () {
    videoRef.current.ontimeupdate = function () {
      setProgress(videoRef.current.currentTime / videoRef.current.duration * 100);
      // console.log(
      //   progress,
      //   "--",
      //   inputRef.current.value,
      //   "--",
      //   videoRef.current.currentTime
      // );
    };
  });

  if (progress >= 100 && isplaying) {
    setProgress(0);
    setIsplaying(false);
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: wraperRef,
    className: "text-white overflow-hidden shadow-xl relative flex items-center justify-center",
    style: {
      width: width + "%"
    }
  }, /*#__PURE__*/_react.default.createElement("video", {
    loop: loop,
    controls: false,
    src: source,
    width: 700,
    height: 700,
    id: "next-player",
    ref: videoRef,
    className: "w-full"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: " absolute w-full video-wraper h-[70px] bottom-0 left-0 sm:p-5  flex items-center justify-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "relative w-full  transition-all duration-500 player-controls"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute w-full bottom-0 flex bg-gradient-to-t from-[#000000ad] to-[#0000] items-center justify-between  space-x-2"
  }, !isplaying ? /*#__PURE__*/_react.default.createElement("button", {
    className: "text-3xl text-white",
    onClick: function onClick() {
      play(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_ai.AiFillPlayCircle, null)) : /*#__PURE__*/_react.default.createElement("button", {
    className: "text-3xl text-white",
    onClick: function onClick() {
      pause(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_ai.AiFillPauseCircle, null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "sm:w-[80%] cursor-pointer w-[60%] relative rounded-full overflow-hidden"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full cursor-pointer flex items-center justify-center rounded-full "
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "range",
    className: "absolute cursor-pointer left-0 appearance-none bg-transparent w-full",
    value: progress,
    min: 0,
    max: 100,
    ref: inputRef,
    onChange: function onChange(e) {
      videoRef.current.currentTime = e.target.value * videoRef.current.duration / 100;
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full bg-[#b0b0b0]",
    onClick: function onClick(e) {
      console.log(e);
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: progress + "%"
    },
    className: "transition-all h-2 bg-[#ffffff]"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: ""
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "text-2xl text-white relative group"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: ""
  }, /*#__PURE__*/_react.default.createElement(_bs.BsFillVolumeUpFill, null)), /*#__PURE__*/_react.default.createElement("span", {
    className: "hidden group-focus-within:inline"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "range",
    className: "absolute left-1/2 -translate-x-1/2 bottom-10 -translate-y-1/2 -rotate-90 scale-1 transition-all duration-500  w-[80px] h-[5px] mb-6 bg-transparent rounded-lg cursor-pointer",
    min: 0,
    max: 100,
    value: volumeValue,
    onChange: function onChange(e) {
      setVolumeValue(e.target.value);
      changeVolume(e.target.value / 100);
    }
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: ""
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "bg-white text-xs text-black py-[2px]  font-[800] rounded-xl relative"
  }, /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      setPlaybackToggle(!playbackToggle);
    },
    className: " z-[999] relative py-[2px] px-3  bg-white top-0 left-0 w-full rounded-full"
  }, currentSpeed, "x"), /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      setCurrentSpeed("0.5");
      setPlaybackToggle(false);
      setPlaybackSpeed(0.5);
    },
    className: playbackToggle ? "absolute z-[1] -top-7  transition-all duration-100 py-[2px] px-3  bg-[#d6d6d6] hover:bg-[#fff]  left-0 w-full rounded-full" : "absolute z-[1]  transition-all duration-100 py-[2px] px-3  bg-[#d6d6d6] hover:bg-[#fff] top-0 left-0 w-full rounded-full"
  }, "0.5x"), /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      setCurrentSpeed("1.0");
      setPlaybackToggle(false);
      setPlaybackSpeed(1);
    },
    className: playbackToggle ? "absolute z-[1] -top-14  transition-all duration-100 py-[2px] px-3  bg-[#d6d6d6] hover:bg-[#fff]  left-0 w-full rounded-full" : "absolute z-[1]  transition-all duration-100 py-[2px] px-3  bg-[#d6d6d6] hover:bg-[#fff] top-0 left-0 w-full rounded-full"
  }, "1.0x"), /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      setCurrentSpeed("1.5");
      setPlaybackToggle(false);
      setPlaybackSpeed(1.5);
    },
    className: playbackToggle ? "absolute z-[1] -top-[5.19rem]  transition-all duration-100 py-[2px] px-3  bg-[#d6d6d6] hover:bg-[#fff]  left-0 w-full rounded-full" : "absolute z-[1]  transition-all duration-100 py-[2px] px-3  bg-[#d6d6d6] hover:bg-[#fff] top-0 left-0 w-full rounded-full"
  }, "1.5x"), /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      setCurrentSpeed("1.75");
      setPlaybackToggle(false);
      setPlaybackSpeed(1.75);
    },
    className: playbackToggle ? "absolute z-[1] -top-28  transition-all duration-100 py-[2px] px-3  bg-[#d6d6d6] hover:bg-[#fff]  left-0 w-full rounded-full" : "absolute z-[1]  transition-all duration-100 py-[2px] px-3  bg-[#d6d6d6] hover:bg-[#fff] top-0 left-0 w-full rounded-full"
  }, "1.75x"), /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      setCurrentSpeed("2.0");
      setPlaybackToggle(false);
      setPlaybackSpeed(2);
    },
    className: playbackToggle ? "absolute z-[1] -top-[8.65rem]  transition-all duration-100 py-[2px] px-3 hover:bg-[#fff] bg-[#d6d6d6]  left-0 w-full rounded-full" : "absolute z-[1]  transition-all duration-100 py-[2px] px-3  bg-[#d6d6d6] hover:bg-[#fff] top-0 left-0 w-full rounded-full"
  }, "2.0x"))), isFullscreen ? /*#__PURE__*/_react.default.createElement("button", {
    className: "text-2xl text-white",
    onClick: function onClick() {
      setIsFullscreen(false);
      closeFullscreen();
    }
  }, /*#__PURE__*/_react.default.createElement(_ai.AiOutlineFullscreenExit, null)) : /*#__PURE__*/_react.default.createElement("button", {
    className: "text-2xl text-white",
    onClick: function onClick() {
      setIsFullscreen(true);
      openFullscreen();
    }
  }, /*#__PURE__*/_react.default.createElement(_ai.AiOutlineFullscreen, null))))));
};
var _default = Player;
exports.default = _default;