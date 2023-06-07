
// debug log switch
export const logEnable = {
    componentDidMount: true,
    componentWillUnmount: true,
    shouldComponentUpdate: true,
    dragger: {
        onMobileTouchStart: true,
        onMobileTouchMove: true,
        onMobileTouchEnd: true,
        onWebMouseStart: true,
        onWebMouseMove: true,
        onWebMouseEnd: true,
        onDragMove: false,
        onDragEnd: false,
    },
    controller: {
        onSlideResetToMatchIndex: true,
    },
    autoPlayer: {
        play: true,
        pause: true,
    },
    windowSizer: {
        onResize: true,
    },
};
