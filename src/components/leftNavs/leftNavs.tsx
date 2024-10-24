import home from '../../assets/icons/home-2-svgrepo-com.svg'
import folder from '../../assets/icons/folder-svgrepo-com (1).svg'
import heart from '../../assets/icons/heart-svgrepo-com (1).svg'
import trash from '../../assets/icons/trash-bin-minimalistic-2-svgrepo-com.svg'
import shared from '../../assets/icons/share-circle-svgrepo-com (1).svg'
import setting from '../../assets/icons/settings-svgrepo-com (1).svg'
import './leftNavs.scss'

const LeftNavs = ():JSX.Element =>{
    return(
        <div className="left-navs">
            <div className="nav-item">
                <img src={home} alt=""  />
                <label htmlFor="">Home</label>
            </div>
            <div className="nav-item">
                <img src={folder} alt=""  />
                <label htmlFor="">My Folder</label>
            </div>
            <div className="nav-item">
                <img src={heart} alt=""  />
                <label htmlFor="">Favorit</label>
            </div>
            <div className="nav-item">
                <img src={trash} alt=""  />
                <label htmlFor="">Trash</label>
            </div>
            <div className="nav-item">
                <img src={shared} alt=""  />
                <label htmlFor="">Shared</label>
            </div>
            <div className="nav-item">
                <img src={setting} alt=""  />
                <label htmlFor="">Setting</label>
            </div>
        </div>
    )
}

export default LeftNavs