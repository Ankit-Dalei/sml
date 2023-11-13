import React, { useState , useCallback } from 'react'
import AdminSidebar from './AdminSidebar'
import { useDropzone } from 'react-dropzone';

const AdminAddAssest = () => {
    const [preAssest,SetPreAssest]=useState({
                Thumbline:"",
                Name:"",
                Url:""
                // Buildfiles:""
            })

    const AddAssest=((e)=>{
        e.preventDefault();
        const Aa={...preAssest}
        const Thumbline=Aa.Thumbline
        const Name=Aa.Name
        const Url=Aa.Url
        const data={Thumbline,Name,Url}
        console.log(data)
    })

    const schange=((e)=>{
        const name=e.target.name
        // console.log(name)
        const value=e.target.value
        // console.log(name , value)
        SetPreAssest({...preAssest, [name]:value})
    })
  return (
    <>
    <AdminSidebar/>
      <div className="adminAddAssest">
            <form action="" className="adminAddAssest_body" enctype="multipart/form-data" onSubmit={AddAssest}>
                <div className="adminAddAssest_right">
                    <div className="adminaddassest_right_section">
                        <input type="file" src="" alt="" onChange={schange} name='Thumbline' value={preAssest.Thumbline}/>
                    </div>
                    <div className="adminaddassest_right_section">
                        <label for="">Enter Content Name</label>
                        <input type="text" onChange={schange} name='Name' value={preAssest.Name}/>
                    </div>
                    <div className="adminaddassest_right_section">
                        <label for="">Url</label>
                        <input type = "text" onChange={schange} name='Url' value={preAssest.Url}/>
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
