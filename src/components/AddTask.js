import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [desc, setDesc] = useState('')
  const [date, setDate] = useState('')
  const [name, setName] = useState('')
  const [cat, setCat] = useState('')
  const [ind , setInd] = useState('')
  const [img, setImg] = useState('')
  const [urg, setUrg] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!date) {
      alert('Please add a event')
      return
    }

    onAdd({ desc,date,name,cat,ind,img,urg })

    setDesc('')
    setDate('')
    setName('')
    setCat('')
    setInd('')
    setImg('')
    setUrg(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Name</label>
        <input
          type='text'
          placeholder='Add Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input
          type='text'
          placeholder='Add Day & Time'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Category</label>
        <input
          type='text'
          placeholder='Add Category'
          value={cat}
          onChange={(e) => setCat(e.target.value)}
        />
        </div>
        <div className='form-control'>
        <label>Index</label>
        <input
          type='text'
          placeholder='Add Index'
          value={ind}
          onChange={(e) => setInd(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Image</label>
        <input
          type='text'
          placeholder='Add Image'
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        </div>
       
        <div className='form-control'>
        <label>Descriptions</label>
        <input
          type='text'
          placeholder='Add Description'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        </div>
      <div className='form-control form-control-check'>
        <label>Urgent</label>
        <input
          type='checkbox'
          checked={urg}
          value={urg}
          onChange={(e) => setUrg(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save Event' className='btn btn-block' />
    </form>
  )
}

export default AddTask
