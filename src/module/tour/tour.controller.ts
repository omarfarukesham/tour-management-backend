import { Request, Response } from 'express'
import { tourService } from './tour.service'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { StatusCodes } from 'http-status-codes'

const createTour = catchAsync(
  async (req: Request, res: Response) => {

      const body = req.body
      const result = await tourService.createTour(body)

      sendResponse(res, {
        statusCode: StatusCodes.OK,
        message: 'Tour Created successfully',
        data: result,
      })
  }
)

const getTours = catchAsync(
  async (req: Request, res: Response) => {
      const result = await tourService.getTours()
  

      sendResponse(res,{
        statusCode: StatusCodes.OK,
        message: "Tours get successfully",
        data: result,
      })
  }
)

const getSingleTour = catchAsync(
  async (req: Request, res: Response) => {
      const id = req.params.id
      const result = await tourService.getSingleTour(id)
  
      sendResponse(res,{
        statusCode: StatusCodes.OK,
        message: "Single Tour get successfully",
        data: result,
      })
  }
)

const updateTour = catchAsync(
  async (req: Request, res: Response) => {
 
      const id = req.params.id
      // console.log(id)
      const body = req.body
      const result = await tourService.updateTour(id, body)

      sendResponse(res, {
        statusCode:StatusCodes.OK,
        message: 'Tour updated successfully',
        data:  result,
        }) 
  }
)


const deleteTour = catchAsync(
  async (req: Request, res: Response) => {

      const id = req.params.id
      const result = await tourService.deleteTour(id)
  
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'Tour deleted successfully',
      data: result,
    })
      
  }
)

const getNextSchedule = catchAsync(
  async (req: Request, res: Response) => {

      const id = req.params.id
      const result = await tourService.getNextSchedule(id)
  
      sendResponse(res, {
        statusCode: StatusCodes.OK,
        message: 'Tour deleted successfully',
        data: result,
      })
        
  }
)

export const tourController = {
  createTour,
  getTours,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextSchedule,
}
