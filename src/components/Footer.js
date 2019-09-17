import React from 'react'
import {Component} from 'react'
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types'
class Footer extends Component{
    render(){
        const {age} = this.props
        return(
            <div className="Footer">
                组件3x显示store数据：{age}
            </div>
        )
    }
}
Footer.propTypes = {
    age:PropTypes.number.isRequired,
}
const mapSateToProps = (state) => {
    return{
        age:state.age
    }
}
export default connect(mapSateToProps)(Footer)