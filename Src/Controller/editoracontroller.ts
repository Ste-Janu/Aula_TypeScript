import { Request, Response } from "express";
import AppDataSource from "../Config/database";
import { Editora } from "../Model/editora";

export class EditoraController {

    //criar editora
  async create(req: Request, res: Response) {
    const { nome, cnpj }: { 
      nome: string
      cnpj: number
    } = req.body;
    const editora = new Editora();
    editora.nome = nome;
    editora.cnpj = cnpj;

    const repo = AppDataSource.getRepository(Editora);
    await repo.save(editora);

    res.json(editora);
  }

  //buscar todas editoras
  async getAll(req: Request, res: Response) {

    const repo = AppDataSource.getRepository(Editora);
    const editoras = await repo.find()
    res.json(editoras);
  }

  //buscar editoras por id
  async get(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Editora);
    const editoras = await repo.findOneBy({ codigo: parseInt(id, 10) });

    res.json(editoras);
  }

  //atualizar editora
  async update(req: Request, res: Response) {
    const id = req.params.id;
    const { nome, cnpj } = req.body;

    const repo = AppDataSource.getRepository(Editora);
    const editora = await repo.findOneBy({ codigo: parseInt(id, 10) });
    editora.nome = nome;
    editora.cnpj = cnpj;


    await repo.save(editora);
    res.json(editora);
  }

  //deletar editora
  async delete(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Editora);
    await repo.delete(id);
    res.json({ message: "Sucesso ao deletar editora" });
  }

}