interface Props {

	/**
	* The length, in milliseconds, that the transition ought to take.
	*/	
	duration: number;

	/**
	* Any valid CSS3 timing function (eg. "linear", "ease-in", "cubic-bezier(1, 0, 0, 1)").
	*/
	easing: string;

	/**
	* The length, in milliseconds, to wait before the animation begins.
	*/
	delay: number;

	/**
	* The length, in milliseconds, to be added to the duration of each subsequent element.
	*/
	staggerDurationBy: number;

	/**
	* The length, in milliseconds, to be added to the delay of each subsequent element.
	*/
	staggerDelayBy: number;

	/**
	* Control the onEnter animation that runs when new items are added to the DOM.
	*/
	enterAnimation: 'elevator' | 'fade' | 'accordianVertical' | 'accordianHorizontal' | 'none' | boolean | { from: any, to: any };

	leaveAnimation: 'elevator' | 'fade' | 'accordianVertical' | 'accordianHorizontal' | 'none' | boolean | { from: any, to: any };

}
declare module 'react-flip-move' {
    export 
}
