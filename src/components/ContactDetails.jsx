const ContactDetails = () => {
    return ( 
        <>
            <div className="contact-d-flex mt-16">
                <div className="contact-right m-2 h-1/2 w-1/2">
                    <a href=""> <img src="https://minteerteam.com/wp-content/uploads/2017/04/location.jpg" alt="" className="h-1/2 w-1/2 m-2"/> </a> 
                    <div className="contact-texts my-2">
                        <h3>Location</h3>
                        <p>Accra, Ghana 📍</p>
                    </div>
                </div>
                <div className="contact-left m-2 h-1/2 w-1/2">
                   <a href=""> <img src="https://static.vecteezy.com/system/resources/previews/000/547/340/original/envelope-mail-icon-vector-illustration.jpg" alt="" className="h-4/6 w-4/6 m-2"/> </a> 
                 <div className="contact-texts my-2">
                    <h3>Mail</h3>
                    <p>tettehfergusonamlalo@gmail.com</p>
                 </div>
                      
                </div>
            </div>
        </>
     );
}
 
export default ContactDetails;