/* eslint-disable no-unused-vars */
import { Fragment, useContext, useState } from "react"
import { FileUploader } from "react-drag-drop-files"
import { toast } from "react-toastify"
import AppContext from "../context/appContext"
// import AppContext from "../context/appContext";
import assets from "../js/assets"
import { baseUrl, useCustomeNavigate } from "../js/request"
const Create = () => {
  const [currentState, setCurrentState] = useState("upload")
  const [imgPreview, setPreview] = useState("")
  const { post, get } = useCustomeNavigate()
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const [sFile, setSfile] = useState("")
  const fileTypes = ["JPEG", "PNG", "GIF"]
  const { token } = useContext(AppContext)
  const handleFile = (file) => {
    if (!file) return
    setSfile(file)
    const preview = URL.createObjectURL(file)
    setPreview(preview)
  }

  const handleInput = (ev) => {
    setData({ ...data, [ev.target.name]: ev.target.value })
  }

  // const generatePreview = () =>

  const analytics = async () => {
    const res = await get("analytics", {
      /** auth coming soon */
    })
    console.log(res)
  }

  const uploadImage = async (e) => {
    e.preventDefault()

    const formToAdd = Object.keys(data)
    const formData = new FormData()
    formData.append("img", sFile)
    formData.append("tags", "test")
    for (let key of formToAdd) formData.append(key, data[key])
    const res = await fetch(`${baseUrl}upload`, {
      method: "POST",
      body: formData,
      headers: { "authorization": `Bearer ${token}` }
    })

    if (res.status === 200) {
      setPreview("")
      setCurrentState("success")
      setSfile("")
    }
    const response = await res.json()
    console.log(response)
  }

  return (
    <div className="create">
      <p className="apt-4 mb-0 apb-4 font-700 font-22">Create</p>
      <div>
        <div>
          <form
            encType="multipart/form-data"
            className="upload position-relative"
            onSubmit={uploadImage}
          >
            {currentState === "upload" ? (
              <>
                {/* <input type="file" onChange={(e) => console.log(e.target.files[0])} /> */}
                <FileUploader
                  handleChange={handleFile}
                  name="file"
                  types={fileTypes}
                  classes={imgPreview ? "" : "file"}
                  multiple={false}
                  children={
                    <>
                      {imgPreview ? (
                        <div className="img-prev" role="button">
                          <img src={imgPreview} alt="" />
                        </div>
                      ) : (
                        <Fragment>
                          <span>
                            <i className="fa-solid fa-upload fs-1 mb-5"></i> <br />
                            Drag and drop photos files to upload <br />
                            Your photo will be private until you upload them
                          </span>
                          <button className="d-bg-blue text-white round-ter border-0 p-3 mt-5">
                            Select Photo
                          </button>
                        </Fragment>
                      )}
                    </>
                  }
                />
                <div>
                  {!imgPreview ? (
                    <p className="text-center">
                      By submitting your photos to aworan you acknowledge that you agree to (insert
                      name )Terms of Service and Community Guidelines. <br /> Please be sure not to
                      violate others' copyright or privacy rights. Learn more
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </>
            ) : (
              ""
            )}

            {currentState === "preview" || imgPreview ? (
              <>
                <div className="preview  w-50">
                  <div className="d-flex justify-content-between">
                    <div>
                      <label className="me-5">Photo title</label>
                      <input className="p-3 round-ter " name="title" onChange={handleInput} />
                    </div>
                    <div>
                      <label className="me-5">Select category</label>
                      <select className="p-3 round-ter " name="category" onChange={handleInput}>
                        <option></option>
                        <option value="fashion">Fashion</option>
                        <option value="auto mobile">Auto mobile</option>
                        <option value="telecom">Telecom</option>
                      </select>
                    </div>
                  </div>

                  <div className="d-flex align-items-center amt-4 amb-4 ">
                    <label className="d-block me-5">Tag</label>
                    <div className="tags d-flex align-items-center">
                      {["children", "woman", "Animal", "Flowers"].map((e) => (
                        <span className="p-3  round-ter d-block" role="button">
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="position-absolute text-end w-100 bottom-0 px-5">
                  <button
                    type="button"
                    className="bg-white border-0 round-ter p-3 px-5 me-md-5 mb-4 mb-md-0 d-blue-sec"
                    onClick={() => setPreview("")}
                    disabled={loading}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="d-bg-blue border-0 px-5 text-wite round-ter p-3 text-white"
                    disabled={loading}
                  >
                    Proceed
                  </button>
                </div>
              </>
            ) : (
              ""
            )}
          </form>

          {currentState === "success" ? (
            <div className="success">
              <div className="img-preview apb-6 text-center">
                <img src={assets.success} alt="" />
              </div>
              <p className="text-center">
                Your photo is under review,once approved you’d be notified
              </p>
              <div className="text-center amt-6">
                <button
                  className="d-bg-blue border-0 px-5 text-wite round-ter p-3 text-white me-md-5 mb-4 mb-md-0"
                  onClick={() => setCurrentState("upload")}
                >
                  Create another
                </button>
                {/* <button className="bg-white border-0 round-ter p-3 px-5  d-blue-sec">Back</button> */}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  )
}

export default Create
