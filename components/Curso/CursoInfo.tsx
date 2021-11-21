import {useEffect} from 'react';
import {useRouter} from 'next/router';


const CursoId = () => {
    const router = useRouter();
    const {cursoId} = router.query;
    console.log(cursoId);
    useEffect(()=>{
        if (!cursoId) {
            router.push('/curso');
        }
    },[]);
    
    return (
        <div>
            {cursoId}
        </div>
    )
}

export default CursoId