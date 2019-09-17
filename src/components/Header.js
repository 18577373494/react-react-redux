import React from 'react'
import {Component} from 'react'
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types'
import {onDel} from '@/store/action'
class Header extends Component{
    render(){
        const {age,onDel} = this.props
        return(
            <div className="Header">
                <button onClick={onDel}>组件1按钮-</button>
            </div>
        )
    }
}
Header.propTypes = {
    age:PropTypes.number.isRequired,
    onDel:PropTypes.func.isRequired,
}
const mapSateToProps = (state) => {
    return{
        age:state.age
    }
}
const mapDispatchToProps = {
    onDel
}
export default connect(mapSateToProps,mapDispatchToProps)(Header)