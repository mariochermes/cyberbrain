import { Button, Image} from 'react-bootstrap';
import { publicUrl } from '../../index';

import './page-button.css';

export default function PageButton({ pageName }) {
    return (
    <Button className="tasks-page-button align-items-center d-flex flex-column h-100 justify-content-center p-0 pt-2 w-100">
        <Image alt={`${pageName} icon`} className="page-icon" src={`${publicUrl}/${pageName}-icon.png`} width={50}/>
        <h5 className="w-100">{pageName.charAt(0).toUpperCase() + pageName.slice(1)}</h5>
      </Button>
    );
}