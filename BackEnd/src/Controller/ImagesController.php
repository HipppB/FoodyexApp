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
     * @Route("/images/{id}", name="images")
     */
    public function index($id): Response
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
