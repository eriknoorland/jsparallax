/**
 * Behaviour - Constructor
 * @param String - The axis we want to move. The options are Axis.X, Axis.Y or Axis.BOTH. The default value is Axis.BOTH
 * @param ITarget - 
 */
function Behaviour(axis, target)
{
	var _axis = axis || Axis.BOTH;
	var _ease = 0.05;
	var _invert = Axis.NONE;
	var _outOfBounds = Behaviour.CONTINUE_TO_DESTINATION;
	var _target = target || new MousePointer();

	this.target = function(){
		return _target;
	}

	this.outOfBounds = function(){
		return _outOfBounds;
	}

	this.axis = function(){
		return _axis;
	}

	this.ease = function(){
		return _ease;
	}

	this.invert = function(){
		return _invert;
	}
}

Behaviour.CONTINUE_TO_DESTINATION = 'continue_to_destination';
Behaviour.RETURN_TO_ORIGIN = 'return_to_origin';
Behaviour.STOP_MOVEMENT = 'stop_movement';

/**
 * 
 * @return Object
 */
Behaviour.prototype.getTarget = function()
{
	return this.target();
}

/**
 * 
 * @return String
 */
Behaviour.prototype.getOutOfBounds = function()
{
	return this.outOfBounds();
}

/**
 * 
 * @return String
 */
Behaviour.prototype.getAxis = function()
{
	return this.axis();
}

/**
 * 
 * @return int
 */
Behaviour.prototype.getEase = function()
{
	return this.ease();
}

/**
 * 
 * @return String
 */
Behaviour.prototype.getInvert = function()
{
	return this.invert();
}