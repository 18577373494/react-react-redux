
const HANDLE_ADD = 'add'
const HANDLE_DEL = 'del'

export const onAdd = () => {
    return {
        type: 'add'
    }
} 
export const onDel = () => {
    return{
        type:'del'
    }
}