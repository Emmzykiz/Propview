function ProfileTab(){
    return <>
    <div className="d-flex profile-content">
            <div className="profile-image-container">
                <img src="./src/assets/profile-vector.svg" className='profile-vector' alt="" />
            </div>
            <div className="profile-info-container">
                <div className="d-flex profile-input-group">
                    <div className="input-container">
                        <label htmlFor="firstname">Firstname</label>
                        <div className="custom-input d-flex">
                            <input type="text" className="profile-input" defaultValue="Oluwaseyi"/>
                            <button type="button">
                                <i className="fa fa-edit"></i>
                            </button>
                        </div>
                    </div>
                    <div className="input-container">
                        <label htmlFor="firstname">Lastname</label>
                        <div className="custom-input d-flex">
                            <input type="text" className="profile-input" defaultValue="Ajewole"/>
                            <button type="button">
                                <i className="fa fa-edit"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="d-flex profile-input-group-two">
                    <div className="input-container">
                        <label htmlFor="firstname">Email Address</label>
                        <div className="custom-input d-flex">
                            <input type="email" className="profile-input" defaultValue="Olubayoseyi10@gmail.com"/>
                            <button type="button">
                                <i className="fa fa-edit"></i>
                            </button>
                        </div>
                    </div>
                    <div className="input-container">
                        <label htmlFor="firstname">Password</label>
                        <div className="custom-input d-flex">
                            <input type="password" className="profile-input" defaultValue="*************"/>
                            <button type="button">
                                <i className="fa fa-edit"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="sign-out-btn-container d-flex justify-content-center">
            <button className="sign-out-btn">Sign Out</button>
        </div>
    </>
}

export default ProfileTab;