import { Request, Response } from "express";
import AppDataSource from "../Config/database";
import { Autor } from "../Model/autor";

export class AutorController {

    //criar autor
  async create(req: Request, res: Response) {
    const { nome, sobrenome, datanasc }: { 
      nome: string
      sobrenome: string
      datanasc: Date
    } = req.body;

    const autor = new Autor();
    autor.nome = nome;
    autor.sobrenome = sobrenome;
    autor.datanasc = datanasc;
    

    const repo = AppDataSource.getRepository(Autor);
    await repo.save(autor);

    res.json(autor);
  }

  //buscar todas autors
  async getAll(req: Request, res: Response) {

    const repo = AppDataSource.getRepository(Autor);
    const autores = await repo.find()
    res.json(autores);
  }

  //buscar autor por id
  async get(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Autor);
    const autores = await repo.findOneBy({ codigo: parseInt(id, 10) });

    res.json(autores);
  }

  //atualizar autor
  async update(req: Request, res: Response) {
    const id = req.params.id;
    const { nome, sobrenome, datanasc } = req.body;

    const repo = AppDataSource.getRepository(Autor);
    const autor = await repo.findOneBy({ codigo: parseInt(id, 10) });
    autor.nome = nome;
    autor.sobrenome = sobrenome;
    autor.datanasc = datanasc;


    await repo.save(autor);
    res.json(autor);
  }

  //deletar editora
  async delete(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Autor);
    await repo.delete(id);
    res.json({ message: "Sucesso ao deletar autor" });
  }

}