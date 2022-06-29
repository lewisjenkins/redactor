<?php
/**
 * @link https://craftcms.com/
 * @copyright Copyright (c) Pixel & Tonic, Inc.
 * @license MIT
 */

namespace craft\redactor\assets\field;

use craft\redactor\assets\redactor\RedactorAsset;
use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;
use craft\web\View;

/**
 * Redactor field asset bundle
 */
class FieldAsset extends AssetBundle
{
    /**
     * @inheritdoc
     */
    public $depends = [
        CpAsset::class,
        RedactorAsset::class,
    ];

    /**
     * @inheritdoc
     */
    public $sourcePath = __DIR__ . '/dist';

    /**
     * @inheritdoc
     */
    public $css = [
        'css/RedactorInput.css',
    ];

    /**
     * @inheritdoc
     */
    public $js = [
        'PluginBase.js',
        'CraftAssetImageEditor.js',
        'CraftAssetImages.js',
        'CraftAssetFiles.js',
        'CraftElementLinks.js',
        'RedactorInput.js',
        'RedactorOverrides.js',
    ];

    /**
     * @inheritdoc
     */
    public function registerAssetFiles($view)
    {
        parent::registerAssetFiles($view);

        if ($view instanceof View) {
            $view->registerTranslations('redactor', [
                'Insert image',
                'Insert URL',
                'Choose image',
                'Link',
                'Link to an entry',
                'Insert link',
                'Unlink',
                'Link to an asset',
                'Link to a category',
            ]);
        }
    }
}
