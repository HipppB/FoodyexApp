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
     * @Route("/images", name="images")
     */
    public function index(Request $resquest): Response
    {
        $test = $resquest->query->get("img");
        $filename = '/Users/hippolytebach/OneDrive/Documents/ISEP/I1/JuniorAcademie/JuniorAcademie/Foodyex/BackEnd/src/Images/carbonara.jpg';

        return new BinaryFileResponse($filename);

        return $this->render('images/index.html.twig', [
            'controller_name' => 'ImagesController',
        ]);
    }
}
