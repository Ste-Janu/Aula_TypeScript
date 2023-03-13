import { Request, Response } from "express";
import AppDataSource from "../Config/database";
import { Voo } from "../Model/Voo";

export class VooController {

    //criar voo
  async create(req: Request, res: Response) {
    const { nome, CP }: { 
      nome: string
      CP: number
    } = req.body;
    const voo = new Voo();
    voo.nome = nome;
    voo.CP = CP;

    const repo = AppDataSource.getRepository(Voo);
    await repo.save(voo);

    res.json(voo);
  }

  //buscar todas voos
  async getAll(req: Request, res: Response) {

    const repo = AppDataSource.getRepository(Voo);
    const voos = await repo.find()
    res.json(voos);
  }

  //buscar voos por id
  async get(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Voo);
    const voos = await repo.findOneBy({ id: parseInt(id, 10) });

    res.json(voos);
  }

  //atualizar voo
  async update(req: Request, res: Response) {
    const id = req.params.id;
    const { nome, CP } = req.body;

    const repo = AppDataSource.getRepository(Voo);
    const voo = await repo.findOneBy({ id: parseInt(id, 10) });
    voo.nome = nome;
    voo.CP = CP;

    await repo.save(voo);
    res.json(voo);
  }

  //deletar voo
  async delete(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Voo);
    await repo.delete(id);
    res.json({ message: "Sucesso ao deletar voo" });
  }

}