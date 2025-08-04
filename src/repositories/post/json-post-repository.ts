import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seeds',
  'posts.json'
);
const SIMULATE_IN_MS = 0

export class JsonPostRepository implements PostRepository {

  private async simulate() {
    if (SIMULATE_IN_MS <= 0) return

    await new Promise(resolve => setTimeout(resolve, SIMULATE_IN_MS))
  }

  private async readFromDisk(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, 'utf-8');
    const parsedJson = JSON.parse(jsonContent);
    const { posts } = parsedJson
    
    return posts
  };

  async findAllPublic(): Promise<PostModel[]> {
    await this.simulate()
    
    const posts = await this.readFromDisk();

    return posts.filter(post => post.published === true)
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.readFromDisk()
    const post = posts.find(post => post.id === id)

    if (!post) throw new Error('Post não encontrado')

    return post
  }
};