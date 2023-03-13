import { Request, Response } from "express";
import AppDataSource from "../Config/database";
import { Passageiro } from "../Model/Passageiro";

export class PassageiroController {

    //criar passageiro
  async create(req: Request, res: Response) {
    const { nome, CodVoo }: { 
      nome: string
      CodVoo: number
    } = req.body;
    const passageiro = new Passageiro();
    passageiro.nome = nome;
    passageiro.CodVoo = CodVoo;

    const repo = AppDataSource.getRepository(Passageiro);
    await repo.save(passageiro);

    res.json(passageiro);
  }

  //buscar todas passageiros
  async getAll(req: Request, res: Response) {

    const repo = AppDataSource.getRepository(Passageiro);
    const passageiros = await repo.find()
    res.json(passageiros);
  }

  //buscar passageiros por id
  async get(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Passageiro);
    const passageiros = await repo.findOneBy({ id: parseInt(id, 10) });

    res.json(passageiros);
  }

  //atualizar passageiro
  async update(req: Request, res: Response) {
    const id = req.params.id;
    const { nome, CodVoo } = req.body;

    const repo = AppDataSource.getRepository(Passageiro);
    const passageiro = await repo.findOneBy({ id: parseInt(id, 10) });
    passageiro.nome = nome;
    passageiro.CodVoo = CodVoo;

    await repo.save(passageiro);
    res.json(passageiro);
  }

  //deletar passageiro
  async delete(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Passageiro);
    await repo.delete(id);
    res.json({ message: "Sucesso ao deletar passageiro" });
  }

}