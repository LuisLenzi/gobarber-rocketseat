import { Router } from "express";
import { parseISO } from "date-fns";
import { getCustomRepository } from 'typeorm';
import AppointmentsRepository from "../repositories/AppointmentsRepository";
import CreateAppointmentService from "../service/CreateAppointmentService";

const appointmentsRouter = Router();

appointmentsRouter.get('/', (request, response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = appointmentsRepository.find();

  return response.status(200).json(appointments);
});

appointmentsRouter.post('/', async (request, response) => {
  try {

    const { provider, date } = request.body;
    const parsedDate = parseISO(date);
    const createAppointment = new CreateAppointmentService();
    const appointment = await createAppointment.execute({ provider, date: parsedDate })

    return response.json(appointment)
  } catch (error) {
    return response.status(400).json({ error: error.message })
  }
})

export default appointmentsRouter;
