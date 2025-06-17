"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectAdminPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [form, setForm] = useState<Partial<Project>>({});

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreate = async () => {
    const res = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const newProject = await res.json();
    setProjects([...projects, newProject]);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Create Project</h2>
      <div className="grid gap-2 mb-6">
        <Input name="title" placeholder="Title" onChange={handleChange} />
        <Input name="slug" placeholder="Slug" onChange={handleChange} />
        <Input
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
        <Input
          name="githubUrl"
          placeholder="GitHub URL"
          onChange={handleChange}
        />
        <Input name="liveUrl" placeholder="Live URL" onChange={handleChange} />
        <Button onClick={handleCreate}>Add Project</Button>
      </div>
      <h3 className="text-lg font-semibold">Existing Projects</h3>
      <div className="space-y-4">
        {projects.map((p) => (
          <Card key={p.id}>
            <CardContent className="p-4">
              <h4 className="font-medium">{p.title}</h4>
              <p className="text-sm text-muted-foreground">{p.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
