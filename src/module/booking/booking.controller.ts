import { Request, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { bookingServices } from './booking.service'


const createBooking = catchAsync(
    async (req: Request, res: Response) => {
        const bookingData = req.body
        console.log(req.body)
        const result = await bookingServices.createBooking(bookingData)
        sendResponse(res, {
            statusCode: 201,
            message: 'Booking created successfully',
            data: result,
        })
    },
)

const getAllBookings = catchAsync(
    async (req: Request, res: Response) => {
        const result = await bookingServices.getAllBookings()
        sendResponse(res, {
            statusCode: 200,
            message: 'Booking fetched successfully',
            data: result,
        })
    },
)
const getSingleBooking = catchAsync(
    async (req: Request, res: Response) => {
        const id = req.params.id
        const result = await bookingServices.getSingleBooking(id)
        sendResponse(res, {
            statusCode: 200,
            message: 'Single Booking fetched successfully',
            data: result,
        })
    },
)

const getAllBookingsOfAUser = catchAsync(
    async (req: Request, res: Response) => {
        const userId = req.params.userId
        const result = await bookingServices.getAllBookingsOfAUser(userId)
        sendResponse(res, {
            statusCode: 200,
            message: 'All Bookings of a user fetched successfully',
            data: result,
        })
    },
)

const updateBooking = catchAsync(
    async (req: Request, res: Response) => {
        const bookingData = req.body
        const id = req.params.id
        const result = await bookingServices.updateBooking(id, bookingData)
        res.status(200).json({
            status: 'success',
            message: 'Booking updated successfully',
            data: result,
        })
    },
)

const deleteBooking = catchAsync(
    async (req: Request, res: Response) => {
        const id = req.params.id
        await bookingServices.deleteBooking(id)
        sendResponse(res, {
            statusCode: 200,
            message: 'Booking deleted successfully',
            data: null,
        })
    },
)

export const bookingController = {
    createBooking,
    getAllBookings,
    getSingleBooking,
    getAllBookingsOfAUser,
    updateBooking,
    deleteBooking,
}