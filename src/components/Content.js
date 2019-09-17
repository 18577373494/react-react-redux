import React from 'react'
import {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {onAdd} from '@/store/action'

class Home extends Component{
    
    render(){
        const {age, onAdd } = this.props;
        return(
            <div className="Home">
                <button onClick={onAdd}>组件2按钮+</button>
            </div>
        )
    }
}
Home.propTypes = {
    age: PropTypes.number.isRequired, //属性对象中的age必须是number类型还有必须有值
    onAdd: PropTypes.func.isRequired //属性对象中的handAdd必须是函数还有必须有值
};
const mapStateToProps = (state) =>{
    return{
        age:state.age
    }
}
const mapDisPatchToProps = {
    onAdd
}

export default connect(mapStateToProps,mapDisPatchToProps)(Home)