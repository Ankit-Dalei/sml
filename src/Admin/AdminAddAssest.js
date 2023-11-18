import React, { useState } from 'react'
import AdminSidebar from './AdminSidebar'
// import { useDropzone } from 'react-dropzone';

const AdminAddAssest = () => {
    const [file,SetFile]=useState(null)
    const [contentlink,SetContentlink]=useState("")
    const [name,SetName]=useState("")
    const [description,SetDescription]=useState("")
    const [catagory,SetCatagory]=useState("")
    const [likes,SetLikes]=useState(0)

    const AddAssest=((e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file); 
        formData.append('contentlink', contentlink);
        formData.append('name', name);
        formData.append('description', description);
        formData.append('likes', likes);
        formData.append('catagory', catagory);
            try {
                fetch('http://localhost:8080/api/uplode',{
                method:"post",
                body:formData
            }).then((e)=>{
                console.log("sent",e);
                // navigate("/")
            }).catch((e)=>{
                console.log(e)
            })
            } catch (error) {
                console.error(error,"ok");
            }
    })
  return (
    <>
    <AdminSidebar/>
      <div className="adminAddAssest">
            <form action="" className="adminAddAssest_body" enctype="multipart/form-data" onSubmit={AddAssest}>
                <div className="adminAddAssest_right">
                    <div className="adminaddassest_right_section">
                        <input type="file" src="" alt="" onChange={(e) => SetFile(e.target.files[0])} name='file'/>
                    </div>
                    <div className="adminaddassest_right_section">
                        <label for="">Enter Content Name</label>
                        <input type="text" onChange={(e) => SetName(e.target.value)} name='name' value={name}/>
                    </div>
                    <div className="adminaddassest_right_section">
                        <label for="">Url</label>
                        <input type = "text" onChange={(e) => SetContentlink(e.target.value)} name='contentlink' value={contentlink}/>
                    </div>
                    <div className="adminaddassest_right_section">
                        <label for="">Description</label>
                        <input type = "text" onChange={(e) => SetDescription(e.target.value)} name='description' value={description}/>
                    </div>
                    <div className="adminaddassest_right_section">
                        <label for="">catagory</label>
                        <input type = "text" onChange={(e) => SetCatagory(e.target.value)} name='catagory' value={catagory}/>
                    </div>
                    <div className="adminaddassest_right_section">
                        <button>Submit</button>
                    </div>
                </div>
            </form>
      </div>
    </>
  )
}

export default AdminAddAssest
