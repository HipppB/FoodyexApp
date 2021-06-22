<?php

namespace App\Entity;

use App\Repository\PlatRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PlatRepository::class)
 */
class Plat
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $OnMarket;

    /**
     * @ORM\Column(type="string", length=32)
     */
    private $Nom;

    /**
     * @ORM\Column(type="integer")
     */
    private $IDVendeur;

    /**
     * @ORM\Column(type="date")
     */
    private $Date;

    /**
     * @ORM\Column(type="integer")
     */
    private $prixUnePart;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $NombrePart;

    /**
     * @ORM\Column(type="boolean")
     */
    private $PartIndividuelle;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $Description;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $LinkImage;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getOnMarket(): ?bool
    {
        return $this->OnMarket;
    }

    public function setOnMarket(?bool $OnMarket): self
    {
        $this->OnMarket = $OnMarket;

        return $this;
    }

    public function getNom(): ?string
    {
        return $this->Nom;
    }

    public function setNom(string $Nom): self
    {
        $this->Nom = $Nom;

        return $this;
    }

    public function getIDVendeur(): ?int
    {
        return $this->IDVendeur;
    }

    public function setIDVendeur(int $IDVendeur): self
    {
        $this->IDVendeur = $IDVendeur;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->Date;
    }

    public function setDate(\DateTimeInterface $Date): self
    {
        $this->Date = $Date;

        return $this;
    }

    public function getPrixUnePart(): ?int
    {
        return $this->prixUnePart;
    }

    public function setPrixUnePart(int $prixUnePart): self
    {
        $this->prixUnePart = $prixUnePart;

        return $this;
    }

    public function getNombrePart(): ?int
    {
        return $this->NombrePart;
    }

    public function setNombrePart(?int $NombrePart): self
    {
        $this->NombrePart = $NombrePart;

        return $this;
    }

    public function getPartIndividuelle(): ?bool
    {
        return $this->PartIndividuelle;
    }

    public function setPartIndividuelle(bool $PartIndividuelle): self
    {
        $this->PartIndividuelle = $PartIndividuelle;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->Description;
    }

    public function setDescription(?string $Description): self
    {
        $this->Description = $Description;

        return $this;
    }

    public function getLinkImage(): ?string
    {
        return $this->LinkImage;
    }

    public function setLinkImage(string $LinkImage): self
    {
        $this->LinkImage = $LinkImage;

        return $this;
    }

    public function getAllDishOnMarket()
    {
        
    }
}
