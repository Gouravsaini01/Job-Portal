import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AdminJobsTable() {
  const navigate = useNavigate();
  const { allAdminJobs = [], searchJobByText } = useSelector(
    (state) => state.job || {}
  );
  console.log("jobs",allAdminJobs)
  const [filterJobs, setFilterJobs] = useState([]);

  useEffect(() => {
    const filteredJobs =
      allAdminJobs.length > 0
        ? allAdminJobs.filter((job) => {
            if (!searchJobByText) {
              return true;
            }
            return job?.name?.toLowerCase().includes(searchJobByText.toLowerCase());
          })
        : [];
    setFilterJobs(filteredJobs);
  }, [allAdminJobs, searchJobByText]);

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent posted jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterJobs.length === 0 ? (
            <TableRow>
              <TableCell colSpan="4">You have not registered any jobs yet</TableCell>
            </TableRow>
          ) : (
            filterJobs.map((job) => (
              <TableRow key={job?.company._id}>
                <TableCell>{job?.company?.title}</TableCell>
                <TableCell>{job?.company.createdAt.split("T")[0]}</TableCell>
                <TableCell className="text-right cursor-pointer">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />{" "}
                    </PopoverTrigger>
                    <PopoverContent className="w-32">
                      <div
                        onClick={() => navigate(`/admin/companies/${company._id}`)}
                        className="flex items-center gap-4 w-fit cursor-pointer"
                      >
                        <Edit2 className="w-4" />
                        <span>Edit</span>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default AdminJobsTable;