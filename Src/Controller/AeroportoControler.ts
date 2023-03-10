import { Request, Response } from "express";
import AppDataSource from "../Config/database";
import { Aeroporto } from "../Model/Aeroporto";

export class AeroportoController {

    //criar aeroporto
  async create(req: Request, res: Response) {
    const { nome }: { 
      nome: string
    } = req.body;
    const aeroporto = new Aeroporto();
    aeroporto.nome = nome;

    const repo = AppDataSource.getRepository(Aeroporto);
    await repo.save(aeroporto);

    res.json(aeroporto);
  }

  //buscar todas aeroportos
  async getAll(req: Request, res: Response) {

    const repo = AppDataSource.getRepository(Aeroporto);
    const aeroportos = await repo.find()
    res.json(aeroportos);
  }

  //buscar aeroportos por id
  async get(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Aeroporto);
    const aeroportos = await repo.findOneBy({ id: parseInt(id, 10) });

    res.json(aeroportos);
  }

  //atualizar aeroporto
  async update(req: Request, res: Response) {
    const id = req.params.id;
    const { nome } = req.body;

    const repo = AppDataSource.getRepository(Aeroporto);
    const aeroporto = await repo.findOneBy({ id: parseInt(id, 10) });
    aeroporto.nome = nome;


    await repo.save(aeroporto);
    res.json(aeroporto);
  }

  //deletar aeroporto
  async delete(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Aeroporto);
    await repo.delete(id);
    res.json({ message: "Sucesso ao deletar aeroporto" });
  }

}