import React from 'react';
import PropTypes from 'prop-types';
import classnames from "classnames"; 
import loader from 'Assets/images/loader.gif';   
import loader1 from 'Assets/images/loader1.gif';   

class Button extends React.Component {

    render() {
        const btnClass = classnames(
          'btn',
          this.props.className,
          `btn-${this.props.size}`,
        `btn-${this.props.viewType}`,
      
        )

        return (
          
          <button
            className={btnClass}  onClick={this.props.onClickBtn}>
                {!this.props.loading ? this.props.btnTitle :''}
              <span className="ldrPart">{
                 this.props.loading && 
                <img 
                src={this.props.viewType ==='default'?loader1: loader}
                className="loader" 
                alt="loader"  
                />}
              </span>
          </button>
        )
  
      }

};
Button.propTypes = {
    size: PropTypes.oneOf(['lg', 'md', 'sm', 'xs', 'inline']),
    /**
     * Specifies type of the Button.
     */
    viewType: PropTypes.oneOf(['primary', 'success', 'default', 'blue']),

   /**
   * Specifies classnames for the Button.
   */
  className: PropTypes.string,
  /**
   * Event handler for on click event of the Button.
   */
  onClick: PropTypes.func,
  /**
   * Specifies whether to enable the ripple effect for Button.
   */
  enableRipple: PropTypes.bool
}
Button.defaultProps = {
  size:'xs',
  viewType:'primary',
  onClickBtn:()=>{},
  loading: false,
  btnTitle: 'submit'

}

export default Button;