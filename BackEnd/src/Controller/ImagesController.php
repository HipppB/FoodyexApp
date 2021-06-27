<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
class ImagesController extends AbstractController
{
    /**
     * @Route("/api/images/", name="images")
     */
    public function image(): Response
    {
        return $this->json(false);
    }

    /**
     * @Route("/api/images/{id}", name="images_byId")
     */
    public function getimage($id): Response
    {
        $path = "../src/Images/" . $id ;
        if(file_exists($path)) {
            return new BinaryFileResponse($path);
        }
        else {
            return $this->json(false);
        }
    }
}
