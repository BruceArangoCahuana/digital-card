import {useState} from 'react'

function useModal() {
    const [isOpenmodal, setisOpenmodal] = useState(false);

    //abrir modal
    const openMoldal = () =>{
        setisOpenmodal(true)
    }
    //abrir cerra modal
     const closeMoldal = () =>{
        setisOpenmodal(false)
    }
    return [isOpenmodal,openMoldal,closeMoldal]
}

export default useModal
