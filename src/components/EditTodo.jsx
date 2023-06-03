import React from 'react'
import { Input, Modal } from 'antd';
export default function EditTodo({ visible , resetEditing , setDataSource, edit , setEdit }) {
  return (
      <Modal
          title="Edit a todo"
          visible={visible}
          okText="Save"
          onCancel={() => {
              resetEditing();
          }}
          onOk={() => {
              setDataSource((prev) => {

                  return prev.map((item) => {
                      if (item.id === edit.id) {
                          return { ...item, todo: edit.todo }

                      } else {
                          return item;
                      }
                  })

              })
              resetEditing();
          }}
      >
          <Input
              value={edit?.todo}
              onChange={(e) => {
                  setEdit((prev) => {
                      return { ...prev, todo: e.target.value }
                  })
              }}
          />

      </Modal>
  )
}
