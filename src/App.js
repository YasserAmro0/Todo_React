import { useState } from 'react';
import 'antd/dist/reset.css';
import { Modal, Table } from 'antd';
import './App.css';
import { Button } from 'antd/es/radio';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo";


function App() {
  const [value, setValue] = useState('');
  const [visible, setVisible] = useState(false);
  const [visiblee, setVisiblee] = useState(false);
  const [edit, setEdit] = useState(null);
  const [dataSource, setDataSource] = useState([]);

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "TodoList",
      dataIndex: "todo",
    },
    {
      key: "3",
      title: "Action",
      render: (record) => {
        return (
          <>
            <EditOutlined onClick={() => {
              editTodo(record);
            }} />
            <DeleteOutlined style={{ marginLeft: "15px", color: "red" }} onClick={() => {
              handleDelete(record)
            }} />
          </>
        )
      }
    }
  ]


  const handleClickAdd = () => {
    setVisiblee(true)
  }

  const handleDelete = (record) => {
    Modal.confirm({
      title: "Are you sure delete this todo?",
      okType: "danger",
      okText:"yes",
      onOk: () => {
        const newDataSource = dataSource.filter(item => item.id !== record.id)
        setDataSource(newDataSource)
      }
    })
  }


  const editTodo = (record) => {
    setVisible(true);
    setEdit({ ...record })
  }


  const resetEditing = () => {
    setVisible(false);
    setEdit(null);
  };


  return (
    <div className="App">
      <h1>ToDo List APP</h1>
      <header className="App-header">
        <Button style={{ backgroundColor: "#eeee" }} onClick={handleClickAdd}>Add a new todo</Button>
        <Table columns={columns} dataSource={dataSource} />
     
        <EditTodo
          visible={visible}
          resetEditing={resetEditing}
          setDataSource={setDataSource}
          edit={edit} setEdit={setEdit} />
        

        <AddTodo
          visiblee={visiblee}
          value={value}
          setVisiblee={setVisiblee}
          setValue={setValue}
          dataSource={dataSource}
          setDataSource={setDataSource} />
        
      </header>
    </div>
  );
}

export default App;
