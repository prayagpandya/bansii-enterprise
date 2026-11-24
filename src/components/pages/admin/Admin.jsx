"use client";

import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export function AdminPage() {
  const [data, setData] = useState([]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/submitForm/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      if (result.status === 200) {
        setData(data.filter((item) => item._id !== id));
        console.log("Data Deleted", result);
        toast.success(result.message || "Data deleted successfully");
      } else {
        toast.error(result.message || "Failed to delete data");
        console.error("Failed to delete data:", result.message);
      }
    } catch (error) {
      console.log("Got Error From Client", error);
      toast.error("Failed to delete data");
    }
  };

  useEffect(() => {
    let isMounted = true;

    const getData = async () => {
      try {
        const response = await fetch("/api/submitForm", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        console.log("Data Fetched", result);
        if (isMounted && result.status === 200) {
          setData(result.data);
        } else if (isMounted) {
          console.error("Failed to fetch data:", result.message);
        }
      } catch (error) {
        console.log("Got Error From Client", error);
      }
    };

    getData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Number</Table.HeadCell>
          <Table.HeadCell>Message</Table.HeadCell>
          <Table.HeadCell>PDF</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {data.map((item) => (
            <Table.Row key={item._id}>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.email}</Table.Cell>
              <Table.Cell>{item.number}</Table.Cell>
              <Table.Cell>{item.message}</Table.Cell>
              <Table.Cell>
                <a href={item.pdf} target="_blank" rel="noreferrer">
                  Download PDF
                </a>
              </Table.Cell>
              <Table.Cell>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      </div>
    </div>
  );
}
