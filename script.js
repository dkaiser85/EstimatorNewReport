html, body {
    max-width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: transparent;
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: center;
}

.calculator-container {
    max-width: 700px;
    width: 100%;
    margin: 0 auto;
    padding: 25px;
    border-radius: 10px;
    background-color: transparent;
    box-shadow: none;
    box-sizing: border-box;
}

.calculator-header {
    text-align: center;
    margin-bottom: 25px;
}

.calculator-header h2 {
    font-size: 28px;
    font-weight: 700;
    color: #333333;
    margin-bottom: 5px;
}

.calculator-header p {
    font-size: 16px;
    font-weight: 300;
    color: #6B7D8D;
    margin: 0;
}

.input-section {
    margin-bottom: 25px;
}

.input-group {
    margin-bottom: 25px;
    padding: 0;
}

.input-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 300;
    color: #6B7D8D;
}

.input-group input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    font-weight: 400;
    border: 1px solid #d3d3d3;
    border-radius: 6px;
    outline: none;
    box-sizing: border-box;
}

.results-section {
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.result-item {
    width: 48%;
    margin-bottom: 25px;
    text-align: center;
}

.result-item h3 {
    font-size: 18px;
    font-weight: 300;
    color: #6B7D8D;
    margin-bottom: 10px;
}

.gauge {
    width: 195px;
    height: 195px;
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.gauge__background {
    stroke: #EFEFEF;
    stroke-width: 10;
    fill: none;
}

.gauge__fill {
    stroke-linecap: round;
    stroke-width: 10;
    fill: none;
    transition: stroke-dashoffset 1s ease-out, stroke 0.5s ease;
}

.financial-metrics {
    width: 100%;
    margin-top: 20px;
}

.financial-item {
    margin-bottom: 15px;
    text-align: center;
}

.financial-item h3 {
    font-size: 18px;
    font-weight: 300;
    color: #6B7D8D;
    margin-bottom: 5px;
}

.financial-item p {
    font-size: 20px;
    font-weight: 700;
    color: #173248;
    margin: 0;
    transition: color 0.3s ease;
}

.financial-item p.red {
    color: #ED5C5C;
}

.financial-item p.green {
    color: #75BB7D;
}

.financial-item p.black {
    color: #000000;
}

.calculator-footer {
    text-align: center;
    margin-top: 25px;
    font-size: 14px;
    color: #777777;
}

.liner-note {
    text-align: center;
    margin-top: 15px;
    font-size: 12px;
    color: #6B7D8D;
    font-weight: 300;
}

@media (max-width: 600px) {
    .result-item {
        width: 100%;
    }

    .gauge {
        width: 250px;
        height: 250px;
    }

    .gauge svg {
        width: 250px;
        height: 250px;
    }

    .gauge text {
        font-size: 40px;
    }

    .financial-item p {
        font-size: 18px;
    }

    .financial-metrics-center {
        flex-direction: column;
    }

    body {
        padding: 10px;
    }
    
    .calculator-container {
        padding: 15px;
        width: 100%;
    }

    .input-group {
        padding: 0;
    }

    .result-item h3 {
        text-align: center;
        padding-right: 35px;
        padding-left: 35px;
        position: relative;
    }

    .result-item .info-icon {
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);
    }
}

.logo-container {
    text-align: center;
    margin-top: 20px;
}

.logo {
    max-width: 250px;
    height: auto;
    display: inline-block;
}

@media (max-width: 600px) {
    .logo {
        max-width: 250px;
    }
}

.info-icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    background-color: transparent;
    color: #6666CC;
    border: 1px solid #6666CC;
    border-radius: 50%;
    font-size: 12px;
    margin-left: 10px;
    cursor: pointer;
    position: relative;
    font-style: italic;
    vertical-align: middle;
    z-index: 100;
    -webkit-tap-highlight-color: transparent;
    line-height: 1;
    pointer-events: auto;
}

.info-icon:hover {
    background-color: #6666CC;
    color: white;
}

.tooltip {
    visibility: hidden;
    position: absolute;
    bottom: calc(100% + 10px);
    left: 0;
    transform: translateX(-50%);
    background-color: #333;
    color: white;
    padding: 12px;
    border-radius: 4px;
    font-size: 14px;
    width: 250px;
    text-align: left;
    z-index: 1000;
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
}

.info-icon:hover .tooltip {
    visibility: visible;
    opacity: 1;
}

.tooltip::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
}

.error-message {
    color: #ED5C5C;
    font-size: 14px;
    margin-top: 5px;
    font-weight: 400;
}

.input-group input:invalid {
    border-color: #ED5C5C;
}

.input-group input {
    transition: border-color 0.3s ease;
}

@keyframes numberChange {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-number {
    animation: numberChange 0.5s ease-out;
}

@media (max-width: 768px) {
    html {
        overflow-x: hidden;
        width: 100%;
        height: 100%;
    }
    
    body {
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        width: 100%;
        min-height: 100%;
        position: relative;
        margin: 0;
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
    }
    
    .input-group input,
    button {
        min-height: 44px;
    }
    
    .input-group {
        margin-bottom: 20px;
    }
    
    input, button {
        font-size: 16px;
    }

    .info-icon {
        z-index: 1;
    }

    .tooltip {
        z-index: 2;
    }

    .tooltip {
        width: 200px;
        left: 0;
        transform: translateX(-50%);
    }

    .info-icon:last-child .tooltip {
        left: auto;
        right: 0;
        transform: translateX(0);
    }

    .info-icon:last-child .tooltip::after {
        left: auto;
        right: 10px;
    }

    h3 {
        position: relative;
        padding-right: 25px;
    }
}

.input-label-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    pointer-events: none;
}

.input-label-wrapper label {
    pointer-events: auto;
    margin: 0;
    padding: 0;
    line-height: normal;
}

.input-label-wrapper .info-icon {
    pointer-events: auto;
}

@media (max-width: 600px) {
    .financial-item h3 {
        text-align: center;
        padding-right: 35px;
        padding-left: 35px;
        position: relative;
    }

    .financial-item .info-icon {
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);
    }
}

.share-section {
    text-align: center;
    margin: 20px 0;
}

.share-button {
    background-color: #6666CC;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

.share-button:hover {
    background-color: #5555BB;
}

.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 1000;
}

.modal-content {
    position: relative;
    background-color: white;
    margin: 15% auto;
    padding: 20px;
    width: 90%;
    max-width: 500px;
    border-radius: 10px;
}

.close-modal {
    position: absolute;
    right: 20px;
    top: 10px;
    font-size: 24px;
    cursor: pointer;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    color: #6B7D8D;
}

.form-group input {
    width: 100%;
    padding: 8px;
    border: 1px solid #d3d3d3;
    border-radius: 4px;
}

.share-options {
    display: flex;
    gap: 10px;
    margin-top: 20px;
}

.share-options button {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.share-submit {
    background-color: #6666CC;
    color: white;
}

.download-pdf {
    background-color: #f0f0f0;
    color: #333;
}

.action-buttons {
    display: flex;
    gap: 15px;
    justify-content: center;
    margin: 30px 0;
    padding: 0 20px;
}

.action-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    min-width: 160px;
}

.button-icon {
    transition: transform 0.2s ease;
}

.share-button {
    background-color: #6666CC;
    color: white;
}

.share-button:hover {
    background-color: #5555BB;
}

.share-button:hover .button-icon {
    transform: translateY(-1px);
}

.reset-button {
    background-color: #f0f0f0;
    color: #444;
}

.reset-button:hover {
    background-color: #e4e4e4;
}

.reset-button:hover .button-icon {
    transform: rotate(45deg);
}

@media (max-width: 600px) {
    .action-buttons {
        flex-direction: column;
        gap: 10px;
        margin: 20px 0;
    }

    .action-button {
        width: 100%;
        padding: 14px 20px;
    }
}

.modal-buttons {
    display: flex;
    gap: 12px;
    margin-top: 20px;
}

.modal-buttons button {
    flex: 1;
    padding: 12px;
    border-radius: 6px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
}

.secondary-button {
    background-color: #f0f0f0;
    color: #333;
    border: 1px solid #ddd;
}

.secondary-button:hover {
    background-color: #e4e4e4;
}

.primary-button {
    background-color: #6666CC;
    color: white;
    border: none;
}

.primary-button:hover {
    background-color: #5555BB;
}

.benefits-list {
    margin: 20px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
}

.benefits-list p {
    color: #666;
    margin: 0 0 12px 0;
    font-weight: 500;
}

.benefits-list ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.benefits-list li {
    color: #333;
    padding: 8px 0;
    font-size: 15px;
}
