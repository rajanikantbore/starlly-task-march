import React from 'react'
import 'antd/dist/antd.css';
import {Button, Table, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function Tabledata() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: "LPR-14786450",
      name: "John Doe",
      address: "175, 5th main road, Vinayak layout, New York ",
      attendance: "71%",
    },
    {
      id: "LPR-14786450",
      name: "John Doe",
      address: "175, 5th main road, Vinayak layout, New York ",
      attendance: "71%",
    },
    {
      id: "LPR-14786450",
      name: "John Doe",
      address: "175, 5th main road, Vinayak layout, New York ",
      attendance: "71%",
    },
    {
      id: "LPR-14786450",
      name: "John Doe",
      address: "175, 5th main road, Vinayak layout, New York ",
      attendance: "71%",
    },
  ]);
  const columns = [
    {
      key: "1",
      title: "Camera ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Officer Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Address",
      dataIndex: "address",
    },
    {
      key: "4",
      title: "Attendence",
      dataIndex: "attendance",
    },
    {
      key: "5",
      title: "Status",
      dataIndex: "status",
    },
    {
      key: "6",
      title: "Actions",
      render: (record) => {
        return (
          <>
          <Button type="primary">View More</Button>&nbsp;
          <Button type="danger">Watch Live</Button>
            <EditOutlined
              onClick={() => {
                onEditStudent(record);
              }}
              style={{ color: "red" , marginLeft: 12}}              
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteStudent(record);
              }}
              style={{ color: "red" , marginLeft: 12}}
            />
          </>
        );
      },
    },
  ];

  const onAddStudent = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newStudent = {
      id: randomNumber,
      name: "Name " + randomNumber,
      
      address: "Address " + randomNumber,
      attendance: randomNumber + "%",
    };
    setDataSource((pre) => {
      return [...pre, newStudent];
    });
  };
  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((student) => student.id !== record.id);
        });
      },
    });
  };
  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h4>User List</h4>
        <Button onClick={onAddStudent}>Add a new Student</Button>
        <Table columns={columns} dataSource={dataSource}></Table>
        <Modal
          title="Edit Student"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((student) => {
                if (student.id === editingStudent.id) {
                  return editingStudent;
                } else {
                  return student;
                }
              });
            });
            resetEditing();
          }}
        >
          <Input
            value={editingStudent?.name}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.email}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, adress: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.address}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, attendance: e.target.value };
              });
            }}
          />
        </Modal>
      </header>
    </div>
  );
}

export default Tabledata