

using Archipalgo.Models;
using System.Web.Http;

namespace Archipalgo.Controllers
{
    public class LoginController : ApiController
    {
        // GET: Login
        [HttpGet]
        [Route("login")]
        public bool Login()
        {
            return true;
        }
    }
}