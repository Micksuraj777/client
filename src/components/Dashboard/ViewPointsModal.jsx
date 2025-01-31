import { Dialog, DialogBody, DialogHeader, Option, Select } from '@material-tailwind/react'
import React from 'react'
import Table from './Table'

function ViewPointsModal({ isOpen, handleOpen }) {
    return (
        <Dialog open={isOpen} handler={handleOpen} className='p-4'>
            <svg

                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5 float-right"
                onClick={handleOpen}
            >
                <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                />
            </svg>
            <DialogHeader>
                <h3>Activity Points</h3>
            </DialogHeader>

            <DialogBody className='flex flex-col gap-5'>
            <Select variant="outlined" label="Select">
                <Option>NSS</Option>
              </Select>
                <Table />
            </DialogBody>
        </Dialog>
    )
}

export default ViewPointsModal