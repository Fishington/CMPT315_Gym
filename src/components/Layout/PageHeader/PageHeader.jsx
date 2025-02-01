import './PageHeader.scss'
import HeaderProfile from './HeaderProfile';

function PageHeader({children, user, title}) {
    return (
        <section className="page-header">
            <div>
                {children ? (
                    children
                ) : (
                    <h1>
                        {title}
                    </h1>
                )
                }
            </div>

            <HeaderProfile user={user}/>
        </section>
    );
}

export default PageHeader;