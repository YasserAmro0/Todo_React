import React from 'react'
import { Input, Modal } from 'antd';
export default function AddTodo({ visiblee , value, setVisiblee  ,setValue ,dataSource,setDataSource }) {
  return (

      <Modal
          title="add new Todo"
          visible={visiblee}
          okText="add"
          onOk={() => {
              const newTodo = {
                  id: dataSource.length + 1,
                  todo: value
              }
              setDataSource(prev => {
                  return [...prev, newTodo]
              })
              setValue("");
              setVisiblee(false);

          }}
          onCancel={() => {
              setValue("");
              setVisiblee(false);

          }
          }
      >
          <Input type='text' onChange={(e) => {
              setValue(e.target.value)
          }} value={value} />
      </Modal>
  )
}
