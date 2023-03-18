import { useRouter } from 'next/router';

export default function Detail() {
  const router = useRouter();
  
  const {curation} = router.query;
  return (
    <div>
      <h4 style={{color:'white'}}>{curation}</h4>
    </div>
  );
}