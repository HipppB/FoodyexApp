<?php

namespace App\Form;

use App\Entity\Plat;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class Plat1Type extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('OnMarket')
            ->add('Nom')
            ->add('IDVendeur')
            ->add('Date')
            ->add('prixUnePart')
            ->add('NombrePart')
            ->add('PartIndividuelle')
            ->add('Description')
            ->add('LinkImage')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Plat::class,
        ]);
    }
}
